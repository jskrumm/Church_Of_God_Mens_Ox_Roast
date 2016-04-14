define(["lodash", "module/registrationDetails", "service/window", "service/data", "templates/registration", "templates/error"], function (_, module, windowService, dataService, registrationTemplates, templateError) {
	"use strict";
	describe('Registration Details Module', function() {
		var fakeFirbaseData = null,
		fakeUpdatedFirebaseData = null,
		returnVal = null,
		allPassTypes = null;

		beforeEach(function() {
			fakeFirbaseData = {
				"confirmationId": "283838",
				"firstname": "test",
				"lastname": "test",
				"PAYMENTREQUEST_0_SHIPTOPHONENUM": "123456789",
				"EMAIL": "t@test.com",
				"church-attending": "blah",
				"eventPass": "2",
				"PAYMENTREQUEST_0_AMT": "100",
				"golfPass": "G",
				"fishingPass": "F",
				"paintballPass": "P"
			};

			fakeUpdatedFirebaseData = {
				"confirmationId": "283838",
				"firstname": "test",
				"lastname": "test",
				"PAYMENTREQUEST_0_SHIPTOPHONENUM": "123456789",
				"EMAIL": "t@test.com",
				"church-attending": "blah",
				"eventPass": "2 Day Pass",
				"PAYMENTREQUEST_0_AMT": "100",
				"golfPass": "Golfing",
				"fishingPass": "Fishing",
				"paintballPass": "Paintball",
				"activities": [
					"Golfing",
					"Fishing",
					"Paintball"
				]
			};

			returnVal = null;

			allPassTypes = [
				{"name": "2 Day Pass", "type": "2"},
				{"name": "1 Day Pass", "type": "1"},
				{"name": "12 and under", "type": "0"},
				{"name": "Golfing", "type": "G"},
				{"name": "Fishing", "type": "F"},
				{"name": "Paintball", "type": "P"}
			];
		});

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
						reference = "https://ohio-mens-ox-roast.firebaseio.com/oxroast/registration/2016/" + firebaseKey,
						rootRef = new window.Firebase(reference),
						firebaseOnSpy = null;

					beforeEach(function() {
						firebaseOnSpy = jasmine.createSpy("on").and.callThrough();
						
						spyOn(windowService, "getParameterByName").and.returnValue(firebaseKey);
						spyOn(dataService, "getReference").and.returnValue({"on": firebaseOnSpy});
						spyOn(dataService, "update");
						spyOn(module, "processInformation");
					
						module.loadContent();
					});

					describe('gets the firebase key from the url', function() {
						it('using the window service', function() {
							expect(windowService.getParameterByName).toHaveBeenCalled();
						});

						it('using the window service and giving it the firebase parameter', function() {
							expect(windowService.getParameterByName).toHaveBeenCalledWith("confirmationId");
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

					describe('use the firebase reference and upate the Firebaes data to say that payment was cofirmed', function() {
						it('using the data service update() method', function() {
							expect(dataService.update).toHaveBeenCalled();
						});

						it('using the data service update() method and giving it the reference and the data to update', function() {
							expect(dataService.update).toHaveBeenCalledWith({"on": firebaseOnSpy}, {"paymentConfirmed": false});
						});
					});

					describe('usese the firebase reference and bind a Firbase event to retrive the firebase data', function() {
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
					var firebaseSnapshotValueSpy = null,
						fakeSuccessAjaxResponse = {
							"status": "success"
						},
						fakeFailAjaxResponse = {
							"status": "failed",
							"errorMessage": "blah"
						};

					beforeEach(function() {
						firebaseSnapshotValueSpy = jasmine.createSpy('val').and.returnValue(fakeFirbaseData);
						spyOn(module, "showDetails");
						spyOn($, "ajax").and.returnValue(jasmine.defferedDone(fakeSuccessAjaxResponse));
						spyOn(module, "processError");
					});

					it('will get the firbase registration from  the snapshot provided using the Firbase method "val"', function() {
						module.processInformation({"val": firebaseSnapshotValueSpy});

						expect(firebaseSnapshotValueSpy).toHaveBeenCalled();		
					});	

					describe('uses the firebase data given back to show the users registration details', function() {
						beforeEach(function() {
							module.processInformation({"val": firebaseSnapshotValueSpy});	
						});

						it('by calling the modules function called showDetails', function() {
							expect(module.showDetails).toHaveBeenCalled();
						});

						it('by calling the modules function called showDetails and providing it the firebase data to display', function() {
							expect(module.showDetails).toHaveBeenCalledWith(fakeFirbaseData);
						});
					});

					xdescribe('make an ajax call to the server', function() {
						it('using the jQuery ajax method', function() {
							module.processInformation({"val": firebaseSnapshotValueSpy});

							expect($.ajax).toHaveBeenCalled();
						});

						it('using the jQuery ajax method with the correct data object', function() {
							module.processInformation({"val": firebaseSnapshotValueSpy});

							expect($.ajax).toHaveBeenCalledWith({
								type: "POST",
				                url: "/Register/ConfirmationEmail",
				                data: fakeFirbaseData,
				                dataType: "json"
							});
						});

						describe('if the ajax call is successful', function() {
							
							describe('and an error isnt returned', function() {
								beforeEach(function() {
									module.processInformation({"val": firebaseSnapshotValueSpy});
								});

								it('dont show an error', function() {
									expect(module.processError).not.toHaveBeenCalled();
								});
							});

							describe('and an error is returned', function() {
								beforeEach(function() {
									$.ajax.and.returnValue(jasmine.defferedDone(fakeFailAjaxResponse));

									module.processInformation({"val": firebaseSnapshotValueSpy});
								});

								describe('throw an error to the user telling them why we can not send them an email', function() {
									it('using the modules method processError', function() {
										expect(module.processError).toHaveBeenCalled();
									});

									it('using the modules method processError and proving it the data given back from the response', function() {
										expect(module.processError).toHaveBeenCalledWith(fakeFailAjaxResponse);
									});
								});
							});
						});

						describe('if the ajax call fails', function() {
							beforeEach(function() {
								$.ajax.and.returnValue(jasmine.defferedFail(fakeFailAjaxResponse));
								
								module.processInformation({"val": firebaseSnapshotValueSpy});
							});

							describe('throw an error to the user telling them why we can not continue processing', function() {
								it('using the modules method processError', function() {
									expect(module.processError).toHaveBeenCalled();
								});

								it('using the modules method processError and proving it a message that we cant send them an email', function() {
									expect(module.processError).toHaveBeenCalledWith({
										"errorMessage": "Sorry, we are having trouble sending you a confirmation email. We where able to confirm that you are register for the Ohio Men's Ox Roast and Retreat. You can verify your payment by checking your Paypal account. Please print this page as your acknowledgement of payment."
									});
								});
							});
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
					var expectedMarkup = JST.confirmationInformation(fakeFirbaseData),
						firebaseKey = "283838",
						fakeEventPass = null,
						fakeGolfPass = null,
						fakeFishingPass = null,
						fakePaintballPass = null;

					beforeEach(function() {
						fakeEventPass = fakeFirbaseData.eventPass;
						fakeGolfPass = fakeFirbaseData.golfPass;
						fakeFishingPass = fakeFirbaseData.fishingPass;
						fakePaintballPass = fakeFirbaseData.paintballPass;

						spyOn(windowService, "getParameterByName").and.returnValue(firebaseKey);
						spyOn(module, "getPassType").and.callThrough();
						spyOn(registrationTemplates, "confirmationInformation").and.returnValue(expectedMarkup);
						spyOn($.fn, "append");

						module.showDetails(fakeFirbaseData);
					});

					describe('gets the firebase key from the url', function() {
						it('using the window service', function() {
							expect(windowService.getParameterByName).toHaveBeenCalled();
						});

						it('using the window service and giving it the firebase parameter', function() {
							expect(windowService.getParameterByName).toHaveBeenCalledWith("confirmationId");
						});
					});

					describe('gets registered users differnt pass type description in order to update the given firebase data', function() {
						it('using the modules getPassType method', function() {
							expect(module.getPassType).toHaveBeenCalled();
						});

						it('using the modules getPassType method and providing it the event pass type', function() {
							expect(module.getPassType).toHaveBeenCalledWith(fakeEventPass);
						});

						it('using the modules getPassType method and providing it the golfing activity pass type', function() {
							expect(module.getPassType).toHaveBeenCalledWith(fakeGolfPass);
						});

						it('using the modules getPassType method and providing it the fishing activity pass type', function() {
							expect(module.getPassType).toHaveBeenCalledWith(fakeFishingPass);
						});

						it('using the modules getPassType method and providing it the paintball activity pass type', function() {
							expect(module.getPassType).toHaveBeenCalledWith(fakePaintballPass);
						});
					});

					describe('gets the markup based on the registration details data that was just updated', function() {
						it('by calling the registration details template', function() {
							expect(registrationTemplates.confirmationInformation).toHaveBeenCalled();
						});

						it('by calling the registration details template with the correct data', function() {
							expect(registrationTemplates.confirmationInformation).toHaveBeenCalledWith(fakeUpdatedFirebaseData);
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

			describe('processError', function() {
				it('that is defined', function() {
					expect(module.processError).toBeDefined();
				});

				it('that is a function', function() {
					expect(module.processError).toEqual(jasmine.any(Function));
				});

				describe('that when called', function() {
					var errorData = {
							"errorMessage": "my first error"
						},
						expectedMarkup = JST.error(errorData);

					beforeEach(function() {
						spyOn(templateError, "error").and.returnValue(expectedMarkup);
						spyOn($.fn, "prepend");

						module.processError(errorData);
					});

					describe('gets the markup based on the error data provided', function() {
						it('by calling the error template', function() {
							expect(templateError.error).toHaveBeenCalled();
						});

						it('by calling the error template with the correct data', function() {
							expect(templateError.error).toHaveBeenCalledWith(errorData);
						});
					});

					describe('prepends the markup before the first fieldset in the form', function() {
						it('using jQuery prepend method', function() {
							expect($.fn.prepend).toHaveBeenCalled();
						});

						it('using jQuery prepend method and giving it the expected markup', function() {
							expect($.fn.prepend).toHaveBeenCalledWith(expectedMarkup);
						});
					});
				});
			});

			describe('getPassType', function() {
				it('that is defined', function() {
					expect(module.getPassType).toBeDefined();
				});

				it('that is a function', function() {
					expect(module.getPassType).toEqual(jasmine.any(Function));
				});

				describe('that when called', function() {
					describe('tries to see if we know the pass type', function() {
						beforeEach(function() {
							spyOn(_, "find");
							module.getPassType("2");
						});

						it('using lodash find function', function() {
							expect(_.find).toHaveBeenCalled();
						});

						it('using lodash find function with an array of pass type objects, the property in the array of objects to find, and the value of that property to find', function() {
							expect(_.find).toHaveBeenCalledWith(allPassTypes, "type", "2");
						});
					});

					describe('checks to see if the pass type object returned is defined', function() {
						beforeEach(function() {
							spyOn(_, "find").and.returnValue(undefined);
							spyOn(_, "isUndefined");
							module.getPassType();
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
							module.getPassType("2");
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

								module.getPassType("1");
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
								returnVal = module.getPassType("1");
							});

							it('then we return the value for that property in the pass type object', function() {
								expect(returnVal).toEqual("1 Day Pass");
							});
						});
					});

					describe('if the pass type returned is not a valid pass type', function() {
						beforeEach(function() {
							returnVal = module.getPassType("3");
						});

						it('then we return the value of the element', function() {
							expect(returnVal).toEqual("");
						});
					});
				});
			});
		});
	});
});