define(["lodash", "module/passes", "service/register"], function (_, module, registerService) {
	var moduleSettings = {
		"scope": "#generalInfo"
	},
	fakeJQueryObject = $('<input type="radio" id="test" name="test" value="2" data-price="55" />'),
	returnVal = null;

	describe('Event and Activity Pass Module', function() {
		it('is defined', function() {
			expect(module).toBeDefined();
		});

		it('its an object', function() {
			expect(module).toEqual(jasmine.any(Object));
		});

		describe('has a function', function() {
			describe('called bindEvents', function() {
				it('is defined', function() {
					expect(module.bindEvents).toBeDefined();
				});

				describe('that when called', function() {
					beforeEach(function() {
						spyOn($.fn, "on");
						module.bindEvents(moduleSettings);
					});

					it('uses jQuery on function to bind events', function() {
						expect($.fn.on).toHaveBeenCalled();
					});

					it('ues jQuery on function to bind a change event for event pass types and activities', function() {
						expect($.fn.on).toHaveBeenCalledWith("change", ".event-pass-types input[type='radio'], .activity-pass-types input[type='checkbox']", moduleSettings, module.triggerSetTotalEvent);
					});

					it('uses jQuery on a total of two times', function() {
						expect($.fn.on.calls.count()).toEqual(2);
					});

					it('using jQuery on function to bind a custome event called setTotal', function() {
						expect($.fn.on).toHaveBeenCalledWith("setTotal", module.setTotal);
					});
				});
			});

			describe('called listen', function() {
				it('is defined', function() {
					expect(module.listen).toBeDefined();
				});

				describe('that when called', function() {
					beforeEach(function() {
						spyOn($.fn, "on");
						module.listen();
					});

					it('uses jQuery on function to add a listeners', function() {
						expect($.fn.on).toHaveBeenCalled();
					});

					it('uses jQuery on a total of two times', function() {
						expect($.fn.on.calls.count()).toEqual(2);
					});

					it('ues jQuery on function to add a listener for when a guest gets added', function() {
						expect($.fn.on).toHaveBeenCalledWith("guest:added", module.setTotal);
					});

					it('ues jQuery on function to add a listener for when a guest gets removed', function() {
						expect($.fn.on).toHaveBeenCalledWith("guest:removed", module.deductAmount);
					});
				});
			});

			describe('called getPriceFromDataAttr', function() {
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

			describe('called setTotal', function() {
				it('that is defined', function() {
					expect(module.setTotal).toBeDefined();
				});

				describe('that when called', function() {
					describe('creates an array of prices based on events and activities selected by the user', function() {
						beforeEach(function() {
							spyOn(_, "map");
							spyOn(registerService, "total");
							spyOn($.fn, "text");

							module.setTotal();
						});

						it('using lodash map function', function() {
							expect(_.map).toHaveBeenCalled();
						});

						it('using lodash map function with some jquery objects and the public function getPriceFromDataAttr', function() {
							expect(_.map).toHaveBeenCalledWith(jasmine.any(Object), module.getPriceFromDataAttr);
						});
					});

					describe('gets the current total from the DOM', function() {
						beforeEach(function() {
							spyOn(_, "map");
							spyOn(registerService, "total");
							spyOn($.fn, "text");

							module.setTotal();	
						});

						it('using jQuery text function', function() {
							expect($.fn.text).toHaveBeenCalled();		
						});
					});

					describe('calculates the total of the array of prices', function() {
						describe('if the DOM does not have the current total', function() {
							beforeEach(function() {
								spyOn(_, "map").and.returnValue(["55", "25", "5"]);
								spyOn(registerService, "total");
								spyOn($.fn, "text").and.returnValue("");
								module.setTotal();
							});

							it('then we use the register service total function to calculate the total', function() {
								expect(registerService.total).toHaveBeenCalled();
							});

							it('and we use the register service total function with the array of prices selected and a current toal of 0', function() {
								expect(registerService.total).toHaveBeenCalledWith(["55", "25", "5"], 0);	
							});
						});

						describe('if the DOM has the current total', function() {
							beforeEach(function() {
								spyOn(_, "map").and.returnValue(["55", "25", "5"]);
								spyOn(registerService, "total");
								spyOn($.fn, "text").and.returnValue("5");

								module.setTotal();
							});

							it('then we use the register service total function to calculate the total', function() {
								expect(registerService.total).toHaveBeenCalled();
							});

							it('and we use the register service total function with the array of prices selected and the current total from the DOM', function() {
								expect(registerService.total).toHaveBeenCalledWith(["55", "25", "5"], "5");	
							});
						});
					});

					describe('inserts the new total into the DOM', function() {
						beforeEach(function() {
							spyOn(_, "map");
							spyOn(registerService, "total").and.returnValue(85);
							spyOn($.fn, "text");

							module.setTotal();
						});

						it('by using the jQuery text function again', function() {
							expect($.fn.text.calls.count()).toEqual(2);
						});

						it('by using the jQuery text function again with the new total', function() {
							expect($.fn.text.calls.argsFor(1)).toEqual([85]);
						});
					});
				});
			});

			describe('called deductAmount', function() {
				it('that is defined', function() {
					expect(module.deductAmount).toBeDefined();
				});

				describe('gets the current total from the DOM', function() {
					beforeEach(function() {
						spyOn($.fn, "text");

						module.deductAmount("50");	
					});

					it('using jQuery text function', function() {
						expect($.fn.text).toHaveBeenCalled();		
					});
				});

				describe('inserts the new total into the DOM', function() {
					beforeEach(function() {
						spyOn($.fn, "text").and.returnValue("100");
						module.deductAmount("50");
					});

					it('by using the jQuery text function again', function() {
						expect($.fn.text.calls.count()).toEqual(2);
					});

					it('by using the jQuery text function again with the new total', function() {
						expect($.fn.text.calls.argsFor(1)).toEqual([50]);
					});
				});
			});

			describe('call triggerSetTotalEvent', function() {
				it('that is defined', function() {
					expect(module.triggerSetTotalEvent).toBeDefined();
				});

				describe('that when called', function() {
					var fakeEvent = {
						"data": {
							"scope": "#generalInfo"
						}
					};

					beforeEach(function() {
						spyOn($.fn, "trigger");
						module.triggerSetTotalEvent(fakeEvent);
					});

					describe('triggers a custome event', function() {
						it('using jQuery trigger function', function() {
							expect($.fn.trigger).toHaveBeenCalled();
						});

						it('using jQuery trigger function with the custom event name and the correct array of parameters', function() {
							expect($.fn.trigger).toHaveBeenCalledWith("setTotal", [fakeEvent.data.scope]);
						});
					});
				});
			});
		});
	});
});