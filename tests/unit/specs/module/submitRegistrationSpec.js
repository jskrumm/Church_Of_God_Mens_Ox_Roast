define(["module/submitRegistration", "service/data"], function (module, dataService) {
	"use strict";

	describe('Submit Registration Module', function() {
		it('to be defined', function() {
			expect(module).toBeDefined();
		});

		it('returns an object', function() {
			expect(module).toEqual(jasmine.any(Object));
		});

		describe('has a function called', function() {
			describe('bindEvents', function() {
				it('that is defined', function() {
					expect(module.bindEvents).toBeDefined();
				});

				it('which is a function', function() {
					expect(module.bindEvents).toEqual(jasmine.any(Function));
				});

				describe('that when called', function() {
					beforeEach(function() {
						spyOn($.fn, "on");

						module.bindEvents({'scope': '#fakeScope'});
					});

					it('uses jQuery on to bind events', function() {
						expect($.fn.on).toHaveBeenCalled();
					});

					it('uses jQuery on to bind a submit event for the registration form', function() {
						expect($.fn.on).toHaveBeenCalledWith("submit", "#fakeScope", module.foo);
					});
				});
			});

			describe('foo', function() {
				it('that is defined', function() {
					expect(module.foo).toBeDefined();
				});

				it('which is a function', function() {
					expect(module.foo).toEqual(jasmine.any(Function));
				});

				describe('which when called', function() {
					var event = null,
						reference = "https://shining-heat-3928.firebaseio.com/oxroast/registration/2016",
						rootRef = new window.Firebase(reference),
						data = {
						"PAYMENTREQUEST_0_AMT": "325",
						"guest": [{"firstname":"test2","lastname":"test","eventPassType":"2 Day Pass","activities":"Golfing","totalCost":110},{"firstname":"kdkd","lastname":"test","eventPassType":"2 Day Pass","activities":"Golfing, Fishing","totalCost":135}],
						"golfPass":  "G",
						"eventPass": "1",
						"church-atteding": "test",
						"EMAIL": "t@test.com",
						"PAYMENTREQUEST_0_SHIPTOPHONENUM": "1234567890",
						"lastname": "test",
						"firstname": "test"
					};
		
					beforeEach(function() {
						event = jasmine.createSpyObj("event", ["preventDefault", "target"]);
						spyOn(dataService, "serializeToObject").and.returnValue(data);
						spyOn(dataService, "getReference").and.returnValue(rootRef);
						spyOn(dataService, "set");

						module.foo(event);
					});

					it('prevents any default action', function() {
						expect(event.preventDefault).toHaveBeenCalled();
					});

					it('gets the form submitted from events target', function() {
						expect(event.target).toHaveBeenCalled;
					});

					describe('serializes the submited form to an object', function() {
						it('using the data service method serializeToObject', function() {
							expect(dataService.serializeToObject).toHaveBeenCalled();
						});

						it('using the data service method serializeToObject and providing the form to serialize', function() {
							expect(dataService.serializeToObject).toHaveBeenCalledWith(event.target);
						});
					});

					describe('gets a reference to the Firebase registration data', function() {
						it('using the data service method getReference', function() {
							expect(dataService.getReference).toHaveBeenCalled();
						});

						it('using the data service method getReference and giving it the Firbase url', function() {
							expect(dataService.getReference).toHaveBeenCalledWith(reference);
						});
					});

					describe('uses the Firbase reference to push new data to the no SQL DB', function() {
						it('using the data service method set', function() {
							expect(dataService.set).toHaveBeenCalled();
						});

						it('using the data service method set and giving it the Firbase reference and data to added to Firebase', function() {
							expect(dataService.set).toHaveBeenCalledWith(rootRef, data);
						});
					});
				});
			});
		});
	});
});