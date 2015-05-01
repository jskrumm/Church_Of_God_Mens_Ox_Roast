define(['lodash', 'module/addGuest'], function (_, module) {
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
		returnVal = null;

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

					it('uses jQuey on to bind a click event to a button with a class of "add-guest" that calls a fuction called foo', function() {
						expect($.fn.on).toHaveBeenCalledWith("click", "button.add-guest", module.foo);
					});
				});
			});

			describe('foo', function() {
				it('that is defined', function() {
					expect(module.foo).toBeDefined();
				});

				describe('that when called', function() {
					
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
			});

			describe('bar', function() {
				var guestList = "{\"guest\": []}",
					stringifiedGuestList = JSON.stringify(guestList);

				it('that is defined', function() {
					expect(module.bar).toBeDefined();
				});

				describe('that when called', function() {
					describe('gets the guest list from the DOM', function() {
						beforeEach(function() {
							spyOn($.fn, "val");
							module.bar();
						});

						it('using jQuey val function', function() {
							expect($.fn.val).toHaveBeenCalled();
						});
					});

					xdescribe('formats the guest list return by the jQuey val function', function() {
						beforeEach(function() {
							spyOn($.fn, "val").and.returnValue(guestList);
							spyOn(JSON, "stringify").and.returnValue(stringifiedGuestList);
							spyOn(JSON, "parse");
							module.bar();
						});

						it('by calling JSON.stringify function', function() {
							expect(JSON.stringify).toHaveBeenCalled();
						});

						it('by calling JSON.stringify function with the return value from the jQuey val function', function() {
							expect(JSON.stringify).toHaveBeenCalledWith(guestList);
						});

						it('by parsing the stringified value using JSON.parse', function() {
							expect(JSON.parse).toHaveBeenCalled();
						});
					});
				});
			});
		});
	});
});