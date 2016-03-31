define(['lodash', 'templates/registration', 'module/guest', 'service/register'], function (_, registrationTemplates, module, registerService) {
	"use strict";

	var fakejQueryTextInput = $('<input id="guest_firstname" type="text" name="guest_firstname" placeholder="First Name" class="valid">'),
		fakeJQueryRaidoInput = $('<input type="radio" id="oneDayGuestPass" name="eventGuestPass" value="1" data-price="35">'),
		allPassTypes = [
			{"name": "2 Day Pass", "type": "2"},
			{"name": "1 Day Pass", "type": "1"},
			{"name": "12 and under", "type": "0"},
			{"name": "Golfing", "type": "G"},
			{"name": "Fishing", "type": "F"},
			{"name": "Paintball", "type": "P"}
		],
		returnVal = null,
		fakeGuestObject = {
			"firstname": "fake",
			"lastname": "fake",
			"eventPassType": "2 Day Pass",
			"activities": "Fishing, Golfing"
		},
		markupToInsert = registrationTemplates.guestList({"guest": [fakeGuestObject]}),
		fakeGuestObjectAfterRemove = {
			"activities": "Golfing",
			"eventPassType": "2 Day Pass",
			"firstname": "test",
			"lastname": "set",
			"totalCost": 100
		};

	describe('Add Guest Module', function() {
		it('is defined', function() {
			expect(module).toBeDefined();
		});

		it('it returns an object', function() {
			expect(module).toEqual(jasmine.any(Object));
		});

		describe('has a function called', function() {
			describe('bindEvents', function() {
				it('that is defined', function() {
					expect(module.bindEvents).toBeDefined();
				});

				describe('that when called', function() {
					beforeEach(function() {
						spyOn($.fn, "on");

						module.bindEvents({"scope": "#fakeScope"});
					});

					it('uses jQuey on to bind events', function() {
						expect($.fn.on).toHaveBeenCalled();
					});

					it('uses jQuey on function to bind two events', function() {
						expect($.fn.on.calls.count()).toEqual(2);
					});

					it('uses jQuey on to bind a click event to a button with a class of "add-guest" that calls a fuction called addGuest', function() {
						expect($.fn.on.calls.argsFor(0)).toEqual(["click", ".add-guest", module.addGuest]);
					});

					it('uses jQuey on to bind a click event to a button with a class of "remove-guest" that calls a fuction called removeGuest', function() {
						expect($.fn.on.calls.argsFor(1)).toEqual(["click", ".remove-guest", module.removeGuest]);
					});
				});
			});

			describe('getValue', function() {
				it('that is defined', function() {
					expect(module.getValue).toBeDefined();
				});

				describe('that when called', function() {
					describe('gets the value of the element', function() {
						beforeEach(function() {
							spyOn($.fn, "val");
							module.getValue(fakejQueryTextInput);
						});

						it('using jQuey val function', function() {
							expect($.fn.val).toHaveBeenCalled();
						});
					});

					describe('tries to see if we know the pass type', function() {
						beforeEach(function() {
							spyOn(_, "find")
							module.getValue(fakeJQueryRaidoInput);
						});

						it('using lodash find function', function() {
							expect(_.find).toHaveBeenCalled();
						});

						it('using lodash find function with an array of pass type objects, the property in the array of objects to find, and the value of that property to find', function() {
							expect(_.find).toHaveBeenCalledWith(allPassTypes, "type", $(fakeJQueryRaidoInput).val());
						});
					});

					describe('checks to see if the pass type object returned is defined', function() {
						beforeEach(function() {
							spyOn(_, "find").and.returnValue(undefined);
							spyOn(_, "isUndefined");
							module.getValue(fakeJQueryRaidoInput);
						});

						it('using the lodash isUndefined function', function() {
							expect(_.isUndefined).toHaveBeenCalled();
						});

						it('using the lodash isUndefined function with the value returned for pass type', function() {
							expect(_.isUndefined).toHaveBeenCalledWith(undefined);
						});
					});

					describe('checks to see if the pass type object returned is an object', function() {
						beforeEach(function() {
							spyOn(_, "find").and.returnValue({});
							spyOn(_, "isObject");
							module.getValue(fakeJQueryRaidoInput);
						});

						it('using the lodash isObject function', function() {
							expect(_.isObject).toHaveBeenCalled();
						});

						it('using the lodash isObject function with the value returned for pass type', function() {
							expect(_.isObject).toHaveBeenCalledWith({});
						});
					});

					describe('if the pass type object returned is a valid pass type', function() {
						describe('we get the value from the valid pass type', function() {
							beforeEach(function() {
								spyOn(_, "result");

								module.getValue(fakeJQueryRaidoInput);
							});

							it('using lodash result', function() {
								expect(_.result).toHaveBeenCalled();
							});

							it('using lodash result with the pass type object and the property value to return', function() {
								expect(_.result).toHaveBeenCalledWith({"name": "1 Day Pass", "type": "1"}, "name");
							});
						});

						describe('and we have the correct property name from the pass type object', function() {
							beforeEach(function() {
								returnVal = module.getValue(fakeJQueryRaidoInput);
							});

							it('then we return the value for that property in the pass type object', function() {
								expect(returnVal).toEqual("1 Day Pass");
							});
						});
					});

					describe('if the pass type returned is not a valid pass type', function() {
						beforeEach(function() {
							returnVal = module.getValue(fakejQueryTextInput);
						});

						it('then we return the value of the element', function() {
							expect(returnVal).toEqual($(fakejQueryTextInput).val());
						});
					});
				});
			});

			describe('buildNewGuestObject', function() {
				it('that is defined', function() {
					expect(module.buildNewGuestObject).toBeDefined();
				});

				it('returns an object', function() {
					returnVal = module.buildNewGuestObject();

					expect(returnVal).toEqual(jasmine.any(Object));
				});

				describe('returns an object that contains the following', function() {
					beforeEach(function() {
						returnVal = module.buildNewGuestObject();
					});

					it('firstname', function() {
						expect(returnVal.firstname).toBeDefined();
					});

					it('lastname', function() {
						expect(returnVal.lastname).toBeDefined();
					});

					it('eventPassType', function() {
						expect(returnVal.eventPassType).toBeDefined();
					});

					it('activities', function() {
						expect(returnVal.activities).toBeDefined()
					});

					it('totalCost', function() {
						expect(returnVal.totalCost).toBeDefined()
					});
				});

				describe('gets fristname and lastname', function() {
					beforeEach(function() {
						spyOn(module, "getValue");

						module.buildNewGuestObject();
					});

					it('using the modules getValue function', function() {
						expect(module.getValue).toHaveBeenCalled();
					});

					it('using the modules getValue function twice (once for firstname and once for lastname)', function() {
						expect(module.getValue.calls.count()).toEqual(2);
					});

					it('using the modules getValue function with the firstname selector string', function() {
						expect(module.getValue.calls.argsFor(0)).toEqual(["#guest_firstname"]);
					});

					it('using the modules getValue function with the lastname selector string', function() {
						expect(module.getValue.calls.argsFor(1)).toEqual(["#guest_lastname"]);
					});
				});

				describe('gets the event pass type', function() {
					beforeEach(function() {
						spyOn(_, "map").and.returnValue(["test", "test"]);

						module.buildNewGuestObject();
					});

					it('using the lodash map function', function() {
						expect(_.map).toHaveBeenCalled();
					});

					it('using the lodash map function with the jquery oject and the modules getValue function', function() {
						expect(_.map.calls.argsFor(0)).toEqual([jasmine.any(Object), module.getValue]);
					});
				});

				describe('gets the activities', function() {
					beforeEach(function() {
						spyOn(_, "map").and.returnValue(["test", "test"]);

						module.buildNewGuestObject();
					});

					it('using the lodash map function', function() {
						expect(_.map).toHaveBeenCalled();
					});

					it('using the lodash map function with the jquery oject and the modules getValue function', function() {
						expect(_.map.calls.argsFor(1)).toEqual([jasmine.any(Object), module.getValue]);
					});
				});

				describe('gets the total cost for that guest', function() {
					beforeEach(function() {
						spyOn(module, "getTotalForGuestPassesSelect");

						module.buildNewGuestObject();
					});

					it('using the modules function called getTotalForGuestPassesSelect', function() {
						expect(module.getTotalForGuestPassesSelect).toHaveBeenCalled();
					});
				});
			});

			describe('addGuest', function() {
				var guestList = "{\"guest\": []}";
				var fakeEvent = {"target": "fake"};

				it('that is defined', function() {
					expect(module.addGuest).toBeDefined();
				});

				describe('that when called', function() {
					beforeEach(function() {
						spyOn($.fn, "trigger");
					});

					afterEach(function() {
						$.fn.trigger.reset;
					});

					describe('checks to see if the form is valid', function() {
						beforeEach(function() {
							spyOn(module, "isFormValid");
							spyOn($.fn, "val").and.returnValue(guestList);
							spyOn(JSON, "parse").and.returnValue({"guest": []});

							module.addGuest(fakeEvent);
						});

						it('using the module function isFormValid', function() {
							expect(module.isFormValid).toHaveBeenCalled();
						});

						it('using the module function isFormValid with the event that triggered the call', function() {
							expect(module.isFormValid).toHaveBeenCalledWith(fakeEvent);
						});
					});

					describe('if the form is valid', function() {
						beforeEach(function() {
							spyOn(module, "isFormValid").and.returnValue(true);
							spyOn($.fn, "val").and.returnValue(guestList);
							spyOn(JSON, "parse").and.returnValue({"guest": []});
						});

						describe('gets the guest list from the DOM', function() {
							beforeEach(function() {
								module.addGuest(fakeEvent);
							});

							it('using jQuey val function', function() {
								expect($.fn.val).toHaveBeenCalled();
							});
						});

						describe('formats the guest list return by the jQuey val function', function() {
							beforeEach(function() {
								module.addGuest(fakeEvent);
							});

							it('by calling JSON.parse', function() {
								expect(JSON.parse).toHaveBeenCalled();
							});

							it('by calling JSON.parse with the value returned from jQuey val function', function() {
								expect(JSON.parse).toHaveBeenCalledWith(guestList);
							});
						});

						describe('gets the newly built guest object', function() {
							beforeEach(function() {
								spyOn(module, "buildNewGuestObject");

								module.addGuest(fakeEvent);		
							});

							it('by calling the modules buildNewGuestObject function', function() {
								expect(module.buildNewGuestObject).toHaveBeenCalled();		
							});	
						});

						describe('inserts the new guest list into the DOM', function() {
							beforeEach(function() {
								spyOn(module, "buildNewGuestObject").and.returnValue(fakeGuestObject);
								spyOn(module, "insertGuestListIntoDOM");

								module.addGuest(fakeEvent);
							});


							it('using the modules function called insertGuestListIntoDOM', function() {
								expect(module.insertGuestListIntoDOM).toHaveBeenCalled();
							});

							it('using the modules function called insertGuestListIntoDOM with the new guest list', function() {
								expect(module.insertGuestListIntoDOM).toHaveBeenCalledWith({"guest": [fakeGuestObject]});
							});
						});

						describe('broadcast its state', function() {
							beforeEach(function() {
								spyOn(module, "buildNewGuestObject").and.returnValue(fakeGuestObject);
								spyOn(module, "insertGuestListIntoDOM");

								module.addGuest(fakeEvent);
							});

							it('using jQuey trigger function', function() {
								expect($.fn.trigger).toHaveBeenCalled();
							});

							it('using jQuey trigger function with the state message and a target of "#guests"', function() {
								expect($.fn.trigger).toHaveBeenCalledWith("guest:added", ["#guests"]);
							});
						});
					});

					describe('if the form is not valid', function() {
						beforeEach(function() {
							spyOn(module, "isFormValid").and.returnValue(false);
							spyOn($.fn, "val");
							spyOn(JSON, "parse");
							spyOn(module, "buildNewGuestObject");
							spyOn(module, "insertGuestListIntoDOM");

							module.addGuest(fakeEvent);
						});

						it('then we do not gets the guest list from the DOM', function() {
							expect($.fn.val).not.toHaveBeenCalled();
						});

						it('then we do not format the guest list return', function() {
							expect(JSON.parse).not.toHaveBeenCalled();
						});

						it('then we do not get the newly built guest object', function() {
							expect(module.buildNewGuestObject).not.toHaveBeenCalled();
						});

						it('then we do not inserts the new guest list into the DOM', function() {
							expect(module.insertGuestListIntoDOM).not.toHaveBeenCalled();
						});

						it('then we do not broadcast the state', function() {
							expect($.fn.trigger).not.toHaveBeenCalled();
						});
					});
				});
			});

			describe('insertGuestListIntoDOM', function() {
				it('that is defined', function() {
					expect(module.insertGuestListIntoDOM).toBeDefined();
				});

				describe('that when called', function() {
					describe('stringifies the guest list before insterting it into the DOM', function() {
						beforeEach(function() {
							spyOn(JSON, "stringify");

							module.insertGuestListIntoDOM({"guest": [fakeGuestObject]});
						});

						it('using JSON stringify function', function() {
							expect(JSON.stringify).toHaveBeenCalled();
						});

						it('using JSON stringify function with the new guest list passed to the function', function() {
							expect(JSON.stringify).toHaveBeenCalledWith({"guest": [fakeGuestObject]});
						});
					});

					describe('sets the guest list JSON in the DOM', function() {
						beforeEach(function() {
							spyOn($.fn, "val");
							spyOn($.fn, "html");

							module.insertGuestListIntoDOM({"guest": [fakeGuestObject]});
						});

						it('using jQuey val function', function() {
							expect($.fn.val).toHaveBeenCalled();
						});

						it('using jQuey val function with the new stringified guest list passed to the function', function() {
							expect($.fn.val).toHaveBeenCalledWith(JSON.stringify({"guest": [fakeGuestObject]}));
						});
					});

					describe('builds the guest list markup', function() {
						beforeEach(function() {
							spyOn($.fn, "val");
							spyOn(registrationTemplates, "guestList");
							spyOn($.fn, "html");

							module.insertGuestListIntoDOM({"guest": [fakeGuestObject]});
						});

						it('using the registration guest list template', function() {
							expect(registrationTemplates.guestList).toHaveBeenCalled();
						});

						it('using the registration guest list template with the new guest list', function() {
							expect(registrationTemplates.guestList).toHaveBeenCalledWith({"guest": [fakeGuestObject]});
						});
					});

					describe('insterts the guest list markup into the DOM', function() {
						beforeEach(function() {
							spyOn($.fn, "val");
							spyOn(registrationTemplates, "guestList").and.returnValue(markupToInsert);
							spyOn($.fn, "html");

							module.insertGuestListIntoDOM({"guest": [fakeGuestObject]});
						});

						it('using jQuey html function', function() {
							expect($.fn.html).toHaveBeenCalled();
						});

						it('using jQuey html function with the new markup to insert', function() {
							expect($.fn.html).toHaveBeenCalledWith(markupToInsert);
						});
					});
				});
			});

			describe('removeGuest', function() {
				var guestList = "{\"guest\":[{\"firstname\":\"test\",\"lastname\":\"set\",\"eventPassType\":\"2 Day Pass\",\"activities\":\"Golfing\", \"totalCost\": 100},{\"firstname\":\"test2\",\"lastname\":\"set2\",\"eventPassType\":\"2 Day Pass\",\"activities\":\"Golfing, Fishing\", \"totalCost\": 125}]}";
				var fakeEvent = {"target": "fake"};
				var parsedGuestList = null;

				it('that is defined', function() {
					expect(module.removeGuest).toBeDefined();
				});

				describe('that when called', function() {
					beforeEach(function() {
						spyOn($.fn, "trigger");

						parsedGuestList = JSON.parse(guestList)
					});

					describe('gets the guest list from the DOM', function() {
						beforeEach(function() {
							spyOn($.fn, "val").and.returnValue(guestList);
							spyOn(JSON, "parse").and.returnValue(parsedGuestList);
							spyOn($.fn, "index").and.returnValue(1);

							module.removeGuest(fakeEvent);
						});

						it('using jQuey val function', function() {
							expect($.fn.val).toHaveBeenCalled();
						});
					});

					describe('formats the guest list return by the jQuey val function', function() {
						beforeEach(function() {
							spyOn($.fn, "val").and.returnValue(guestList);
							spyOn(JSON, "parse").and.returnValue(parsedGuestList);
							spyOn($.fn, "index").and.returnValue(1);

							module.removeGuest(fakeEvent);
						});

						it('by calling JSON.parse', function() {
							expect(JSON.parse).toHaveBeenCalled();
						});

						it('by calling JSON.parse with the value returned from jQuey val function', function() {
							expect(JSON.parse).toHaveBeenCalledWith(guestList);
						});
					});

					describe('gets the list item to remove', function() {
						beforeEach(function() {
							spyOn($.fn, "val").and.returnValue(guestList);
							spyOn(JSON, "parse").and.returnValue(parsedGuestList);
							spyOn($.fn, "parent").and.returnValue($("<li>Test</li>"));
							spyOn($.fn, "index").and.returnValue(1);

							module.removeGuest(fakeEvent);
						});

						it('by calling jQuey parent function to get the correct list item', function() {
							expect($.fn.parent).toHaveBeenCalled();
						});
					});

					describe('gets the index of the list item to remove', function() {
						beforeEach(function() {
							spyOn($.fn, "val").and.returnValue(guestList);
							spyOn(JSON, "parse").and.returnValue(parsedGuestList);
							spyOn($.fn, "parent").and.returnValue($("<li>Test</li>"));
							spyOn($.fn, "index").and.returnValue(1);

							module.removeGuest(fakeEvent);
						});

						it('by calling jquery index function', function() {
							expect($.fn.index).toHaveBeenCalled();
						});
					});

					describe('inserts the new guest list into the DOM', function() {
						beforeEach(function() {
							spyOn($.fn, "val").and.returnValue(guestList);
							spyOn(JSON, "parse").and.returnValue(parsedGuestList);
							spyOn($.fn, "parent").and.returnValue($("<li>Test</li>"));
							spyOn($.fn, "index").and.returnValue(1);
							spyOn(module, "insertGuestListIntoDOM");

							module.removeGuest(fakeEvent);
						});


						it('using the modules function called insertGuestListIntoDOM', function() {
							expect(module.insertGuestListIntoDOM).toHaveBeenCalled();
						});

						it('using the modules function called insertGuestListIntoDOM with the new guest list', function() {
							expect(module.insertGuestListIntoDOM).toHaveBeenCalledWith({"guest": [fakeGuestObjectAfterRemove]});
						});
					});

					describe('broadcast its state with the total cost for that guest who was removed', function() {
						beforeEach(function() {
							spyOn($.fn, "val").and.returnValue(guestList);
							spyOn(JSON, "parse").and.returnValue(parsedGuestList);
							spyOn($.fn, "parent").and.returnValue($("<li>Test</li>"));
							spyOn($.fn, "index").and.returnValue(1);
							spyOn(module, "insertGuestListIntoDOM");

							returnVal = parsedGuestList.guest[1].totalCost;

							module.removeGuest(fakeEvent);
						});

						it('using jQuey trigger function', function() {
							expect($.fn.trigger).toHaveBeenCalled();
						});

						it('using jQuey trigger function with the message "guest:removed" and the cost for that guest', function() {
							expect($.fn.trigger).toHaveBeenCalledWith('guest:removed', [returnVal]);
						});
					});
				});
			});

			describe('getTotalForGuestPassesSelect', function() {
				it('that is defined', function() {
					expect(module.getTotalForGuestPassesSelect).toBeDefined();
				});

				describe('that when called', function() {
					describe('creates an array of prices based on events and activities selected by the user', function() {
						beforeEach(function() {
							spyOn(_, "map");
							spyOn(registerService, "total");

							module.getTotalForGuestPassesSelect();
						});

						it('using lodash map function', function() {
							expect(_.map).toHaveBeenCalled();
						});

						it('using lodash map function with some jquery objects and the public function getPriceFromDataAttr', function() {
							expect(_.map).toHaveBeenCalledWith(jasmine.any(Object), module.getPriceFromDataAttr);
						});
					});


					describe('calculates the total of the array of prices', function() {
						beforeEach(function() {
							spyOn(_, "map").and.returnValue(["55", "25", "5"]);
							spyOn(registerService, "total");
							module.getTotalForGuestPassesSelect();
						});

						it('then we use the register service total function to calculate the total', function() {
							expect(registerService.total).toHaveBeenCalled();
						});

						it('and we use the register service total function with the array of prices selected', function() {
							expect(registerService.total).toHaveBeenCalledWith(["55", "25", "5"]);	
						});
					});
				});
			});

			describe('getPriceFromDataAttr', function() {
				var fakeJQueryObject = $('<input type="radio" id="test" name="test" value="2" data-price="55" />');

				it('that is defined', function() {
					expect(module.getPriceFromDataAttr).toBeDefined();
				});

				describe('that when called', function() {
					describe('checks for an attribute data-price is on the element passed to the function', function() {						
						beforeEach(function() {
							spyOn($.fn, "attr");
							module.getPriceFromDataAttr(fakeJQueryObject);
						});

						it('using jQuery attr function', function() {
							expect($.fn.attr).toHaveBeenCalled();
						});

						it('using jQuery attr function with the data attrbute of data-price', function() {
							expect($.fn.attr).toHaveBeenCalledWith("data-price");
						});
					});

					it('returns the data attribute value if one exits for data-price', function() {
						returnVal = module.getPriceFromDataAttr(fakeJQueryObject);

						expect(returnVal).toEqual("55");
					});

					it('returns undefined if the data attribute data-price does not exit', function() {
						returnVal = module.getPriceFromDataAttr($('<input type="radio" id="test" name="test" value="2"/>'));

						expect(returnVal).toEqual(undefined);
					});
				});
			});

			describe('isFormValid', function() {
				it('that is defined', function() {
					expect(module.isFormValid).toBeDefined();
				});

				describe('that when called', function() {
					var fakeEvent = {
						target: "#test"
					};

					beforeEach(function() {
						spyOn($.fn, "parents").and.returnValue($("<form></form>"));
						spyOn($.fn, "valid");

						module.isFormValid(fakeEvent);
					});

					describe('gets the nearest form to the target pass in', function() {
						it('using jQuey parents function', function() {
							expect($.fn.parents).toHaveBeenCalled();
						});

						it('using jQuey parents function with the form selector', function() {
							expect($.fn.parents).toHaveBeenCalledWith("form");
						});
					});

					describe('checks to see if the nearest form is valid', function() {
						it('using jQuey validation valid function', function() {
							expect($.fn.valid).toHaveBeenCalled();
						});
					});
				});
			});
		});
	});
});