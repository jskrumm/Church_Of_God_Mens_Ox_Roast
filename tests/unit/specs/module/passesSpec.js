define(["module/passes", "service/register"], function (module, registerService) {
	var moduleSettings = {
		"scope": "#generalInfo"
	},
	fakeJQueryObject = $('<input type="radio" id="test" name="test" value="2" data-price="55" />');

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

					it('ues jQuery on function to bind a change event for event pass types', function() {
						expect($.fn.on).toHaveBeenCalledWith("change", "event-pass-types input[type='radio']", {"target": jasmine.any(Object)}, module.setTotal);
					});

					it('uses jQuery on a total of two times', function() {
						expect($.fn.on.calls.count()).toEqual(2);
					});

					it('using jQuery on function to bind a change event for activity pass types', function() {
						expect($.fn.on).toHaveBeenCalledWith("change", "activity-pass-type input[type'checkbox']", {"target": jasmine.any(Object)}, module.setTotal);
					});
				});
			});

			describe('called setTotal', function() {
				it('is defined', function() {
					expect(module.setTotal).toBeDefined();
				});

				describe('that when called', function() {
					describe('gets the inital total', function() {
						beforeEach(function() {
							spyOn($.fn, "text");
							spyOn($.fn, "attr");
							spyOn($.fn, "is");
							spyOn(registerService, "total");

							module.setTotal(fakeJQueryObject);
						});

						it('using jQuery text function', function() {
							expect($.fn.text).toHaveBeenCalled();
						});
					});

					describe('gets the pass price from the target', function() {
						beforeEach(function() {
							spyOn($.fn, "text");
							spyOn($.fn, "attr");
							spyOn($.fn, "is");
							spyOn(registerService, "total");

							module.setTotal(fakeJQueryObject);
						});

						it('using jQuery attr function', function() {
							expect($.fn.attr).toHaveBeenCalled();
						});

						it('using jQuery attr function with "data-price"', function() {
							expect($.fn.attr).toHaveBeenCalledWith("data-price");
						});
					});

					describe('test the state of the target element', function() {
						beforeEach(function() {
							spyOn($.fn, "text");
							spyOn($.fn, "attr");
							spyOn($.fn, "is");
							spyOn(registerService, "total");
						
							module.setTotal(fakeJQueryObject);
						});

						it('using jQuery is function', function() {
							expect($.fn.is).toHaveBeenCalled();
						});

						it('using jQuery is function with the ":checked" modifier', function() {
							expect($.fn.is).toHaveBeenCalledWith(":checked");
						});
					});

					describe('if the state of the target element is checked', function() {
						beforeEach(function() {
							spyOn($.fn, "text").and.returnValue("0");
							spyOn($.fn, "attr").and.returnValue("65");
							spyOn($.fn, "is").and.returnValue(true);
							spyOn(registerService, "total").and.returnValue(65);
						
							module.setTotal(fakeJQueryObject);
						});

						describe('we call a service to get the calculate total for the ox roast', function() {
							it('using our register service', function() {
								expect(registerService.total).toHaveBeenCalled();
							});

							it('using our register service by passing it the inital total, pass cost, and operand to use', function() {
								expect(registerService.total).toHaveBeenCalledWith("0", "65", "add");
							});
						});

						describe('and we have the total, then we insert it into the DOM', function() {
							it('using jQuery text function a second time', function() {
								expect($.fn.text.calls.count()).toEqual(2);
							});

							it('using jQuery text function a second time with the new total value', function() {
								expect($.fn.text.calls.argsFor(1)).toEqual([65]);
							});
						});
					});

					describe('if teh state of the target element is not checked', function() {
						beforeEach(function() {
							spyOn($.fn, "text").and.returnValue("65");
							spyOn($.fn, "attr").and.returnValue("65");
							spyOn($.fn, "is").and.returnValue(false);
							spyOn(registerService, "total").and.returnValue(0);
						
							module.setTotal(fakeJQueryObject);
						});


						describe('we call a service to get the calculate total for the ox roast', function() {
							it('using our register service', function() {
								expect(registerService.total).toHaveBeenCalled();
							});

							it('using our register service by passing it the inital total, pass cost, and operand to use', function() {
								expect(registerService.total).toHaveBeenCalledWith("65", "65", "subtract");
							});
						});

						describe('and we have the total, then we insert it into the DOM', function() {
							it('using jQuery text function a second time', function() {
								expect($.fn.text.calls.count()).toEqual(2);
							});

							it('using jQuery text function a second time with the new total value', function() {
								expect($.fn.text.calls.argsFor(1)).toEqual([0]);
							});
						});
					});
				});
			});
		});
	});
});