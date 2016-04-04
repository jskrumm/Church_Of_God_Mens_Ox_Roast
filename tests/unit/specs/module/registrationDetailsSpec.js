define(["module/registrationDetails", "service/window", "service/data", "templates/registration"], function (module, windowService, dataService, registrationTemplates) {
	"use strict";
	describe('Registration Details Module', function() {
		var fakeFirbaseData = {
			"confirmationId": "283838",
			"firstname": "test",
			"lastname": "test",
			"PAYMENTREQUEST_0_SHIPTOPHONENUM": "123456789",
			"EMAIL": "t@test.com",
			"church-attending": "blah",
			"eventPass": "2",
			"PAYMENTREQUEST_0_AMT": "100"
		};

		it('is defined', function() {
			expect(module).toBeDefined();
		});

		it('returns an objec', function() {
			expect(module).toEqual(jasmine.any(Object));
		});

		describe('has a function called', function() {
			describe('listen', function() {
				it('that is defined', function() {
					expect(module.listen).toBeDefined();
				});

				it('that is a function', function() {
					expect(module.listen).toEqual(jasmine.any(Function));
				});

				describe('that when called', function() {
					beforeEach(function() {
						spyOn($.fn, "on");

						module.listen();
					});

					describe('adds listners', function() {
						it('using the jQuery "on" method', function() {
							expect($.fn.on).toHaveBeenCalled();
						});

						it('using the jQuery "on" method and to add a listener to see when the registrationDetails can be loaded and telling it what function to call', function() {
							expect($.fn.on).toHaveBeenCalledWith("registrationDetails:load", module.loadContent);
						});
					});
				});
			});

			describe('loadContent', function() {
				it('that is defined', function() {
					expect(module.loadContent).toBeDefined();
				});

				it('that is a function', function() {
					expect(module.loadContent).toEqual(jasmine.any(Function));
				});

				describe('that when called', function() {
					var firebaseKey = "-KESj6x4Hcgol7Tjc6Wv",
						reference = "https://shining-heat-3928.firebaseio.com/oxroast/registration/2016/" + firebaseKey,
						rootRef = new window.Firebase(reference),
						firebaseOnSpy = null;

					beforeEach(function() {
						firebaseOnSpy = jasmine.createSpy("on").and.callThrough();
						
						spyOn(windowService, "getParameterByName").and.returnValue(firebaseKey);
						spyOn(dataService, "getReference").and.returnValue({"on": firebaseOnSpy});
						spyOn(module, "processInformation");
					
						module.loadContent();
					});

					describe('gets the firebase key from the url', function() {
						it('using the window service', function() {
							expect(windowService.getParameterByName).toHaveBeenCalled();
						});

						it('using the window service and giving it the firebase parameter', function() {
							expect(windowService.getParameterByName).toHaveBeenCalledWith("FIREBASEKEY");
						});
					});

					describe('uses the firebase key to construct url and get a reference to Firbase', function() {
						it('by calling the data service method called getReference', function() {
							expect(dataService.getReference).toHaveBeenCalled();
						});

						it('by calling the data service method called getReference and providing it with the url to get a reference to the firebase information', function() {
							expect(dataService.getReference).toHaveBeenCalledWith(reference);
						});
					});

					describe('usese the firebase reference and binds a Firbase event to retrive the firebase data', function() {
						it('using firebase "on" method', function() {
							expect(firebaseOnSpy).toHaveBeenCalled();		
						});

						it('using firebase "on" method and passing it the event type  of "value" a function called processInformation', function() {
							expect(firebaseOnSpy).toHaveBeenCalledWith("value", module.processInformation);
						});
					});
				});
			});

			describe('processInformation', function() {
				it('that is defined', function() {
					expect(module.processInformation).toBeDefined();
				});

				it('that is a function', function() {
					expect(module.processInformation).toEqual(jasmine.any(Function));
				});

				describe('that when called', function() {
					var firebaseSnapshotValueSpy = null;

					beforeEach(function() {
						firebaseSnapshotValueSpy = jasmine.createSpy('val').and.returnValue(fakeFirbaseData);
						spyOn(module, "showDetails");

						module.processInformation({"val": firebaseSnapshotValueSpy});
					});

					it('will get the firbase registration from  the snapshot provided using the Firbase method "val"', function() {
						expect(firebaseSnapshotValueSpy).toHaveBeenCalled();		
					});	

					describe('uses the firebase data given back to show the users registration details', function() {
						it('by calling the modules function called showDetails', function() {
							expect(module.showDetails).toHaveBeenCalled();
						});

						it('by calling the modules function called showDetails and providing it the firebase data to display', function() {
							expect(module.showDetails).toHaveBeenCalledWith(fakeFirbaseData);
						});
					});
				});
			});

			describe('showDetails', function() {
				it('that is defined', function() {
					expect(module.showDetails).toBeDefined();
				});

				it('that is a function', function() {
					expect(module.showDetails).toEqual(jasmine.any(Function));
				});

				describe('that when called', function() {
					var expectedMarkup = JST.confirmationInformation(fakeFirbaseData);

					beforeEach(function() {
						spyOn(registrationTemplates, "confirmationInformation").and.returnValue(expectedMarkup);
						spyOn($.fn, "append");

						module.showDetails(fakeFirbaseData);
					});

					describe('gets the markup based on the registration details data provided', function() {
						it('by calling the registration details template', function() {
							expect(registrationTemplates.confirmationInformation).toHaveBeenCalled();
						});

						it('by calling the registration details template with the correct data', function() {
							expect(registrationTemplates.confirmationInformation).toHaveBeenCalledWith(fakeFirbaseData);
						});
					});

					describe('appends the markup before the first fieldset in the form', function() {
						it('using jQuery append method', function() {
							expect($.fn.append).toHaveBeenCalled();
						});

						it('using jQuery append method and giving it the expected markup', function() {
							expect($.fn.append).toHaveBeenCalledWith(expectedMarkup);
						});
					});
				});
			});
		});
	});
});