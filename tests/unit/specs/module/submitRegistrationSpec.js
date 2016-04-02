define(["module/submitRegistration", "service/data", "templates/error", "service/window"], function (module, dataService, templateError, windowService) {
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
						expect($.fn.on).toHaveBeenCalledWith("submit", "#fakeScope", module.submitForm);
					});
				});
			});

			describe('submitForm', function() {
				it('that is defined', function() {
					expect(module.submitForm).toBeDefined();
				});

				it('which is a function', function() {
					expect(module.submitForm).toEqual(jasmine.any(Function));
				});

				describe('which when called', function() {
					var event = null,
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
						},
						preparedData = {
							"PAYMENTREQUEST_0_AMT": "325",
							"golfPass":  "G",
							"eventPass": "1",
							"church-atteding": "test",
							"EMAIL": "t@test.com",
							"PAYMENTREQUEST_0_SHIPTOPHONENUM": "1234567890",
							"lastname": "test",
							"firstname": "test",
							"guests": []
						},
						fakeSuccessAjaxResponse = {
							"firebaseUrl": "",
			            	"paymentCommitted": "true",
			            	"paymentConfirmed": "false",
			            	"redirectUrl": ""
						},
						fakeFailAjaxResponse = {
							"errorMessage": "blah"
						},
						unqiueKey = "K820JEY";
		
					beforeEach(function() {
						event = jasmine.createSpyObj("event", ["preventDefault", "target"]);
						spyOn($.fn, "valid").and.returnValue(true);
						spyOn($.fn, "attr").and.returnValue("blah");
						spyOn(dataService, "serializeToObject").and.returnValue(data);
						spyOn(module, "prepareDataForSubmission").and.returnValue(preparedData);
						spyOn($, "ajax").and.returnValue(jasmine.defferedDone(fakeSuccessAjaxResponse));
						spyOn(module, "processError");
						spyOn(module, "addDataToDatabase").and.returnValue(unqiueKey);
						spyOn(module, "redirectUserToCompletePayment");
						spyOn(module, "removeDataFromDatabase");

					});

					it('prevents any default action', function() {
						module.submitForm(event);

						expect(event.preventDefault).toHaveBeenCalled();
					});

					it('gets the form submitted from events target', function() {
						module.submitForm(event);

						expect(event.target).toHaveBeenCalled;
					});

					it('checks to see if the form is valid', function() {
						module.submitForm(event);

						expect($.fn.valid).toHaveBeenCalled();
					});

					describe('if the form is valid', function() {
						it('dont show an error', function() {
							module.submitForm(event);

							expect(module.processError).not.toHaveBeenCalled();
						});

						describe('serializes the submited form to an object', function() {
							beforeEach(function() {
								module.submitForm(event);
							});

							it('using the data service method serializeToObject', function() {
								expect(dataService.serializeToObject).toHaveBeenCalled();
							});

							it('using the data service method serializeToObject and providing the form to serialize', function() {
								expect(dataService.serializeToObject).toHaveBeenCalledWith($(event.target));
							});
						});

						describe('prepare form data for submission', function() {
							beforeEach(function() {
								module.submitForm(event);
							});

							it('using the modules method prepareDataForSubmission', function() {
								expect(module.prepareDataForSubmission).toHaveBeenCalled();
							});

							it('using the modules method prepareDataForSubmission and providing it the serialized form object and an array of unwanted properties', function() {
								expect(module.prepareDataForSubmission).toHaveBeenCalledWith(data, jasmine.any(Array));
							});
						});

						describe('add data to database', function() {
							beforeEach(function() {
								module.submitForm(event);
							});

							it('using the modules method addDataToDatabase', function() {
								expect(module.addDataToDatabase).toHaveBeenCalled();
							});

							it('using the modules method addDataToDatabase and providing it the preparedData and the firebase url', function() {
								expect(module.addDataToDatabase).toHaveBeenCalledWith(preparedData, "https://shining-heat-3928.firebaseio.com/oxroast/registration/2016");		
							});	
						});

						describe('make an ajax call to the server', function() {
							it('using the jQuery ajax method', function() {
								module.submitForm(event);

								expect($.ajax).toHaveBeenCalled();
							});

							it('using the jQuery ajax method with the correct data object', function() {
								module.submitForm(event);

								expect($.ajax).toHaveBeenCalledWith({
									type: "POST",
					                url: "blah",
					                data: preparedData,
					                dataType: "json"
								});
							});

							describe('if the ajax call is successful', function() {
								
								describe('and an error isnt returned', function() {
									beforeEach(function() {
										module.submitForm(event);
									});

									describe('redirect the user to complete payment', function() {
										it('using the modules method redirectUserToCompletePayment', function() {
											expect(module.redirectUserToCompletePayment).toHaveBeenCalled();
										});

										it('using the modules method redirectUserToCompletePayment and providing the data return from the response and the unqiueKey from Firebase', function() {
											expect(module.redirectUserToCompletePayment).toHaveBeenCalledWith(fakeSuccessAjaxResponse, unqiueKey);
										});
									});

									it('dont show an error', function() {
										expect(module.processError).not.toHaveBeenCalled();
									});
								});

								describe('and an error is returned', function() {
									beforeEach(function() {
										$.ajax.and.returnValue(jasmine.defferedDone(fakeFailAjaxResponse));

										module.submitForm(event);
									});

									it('we dont redirect the user to complete payment', function() {
										expect(module.redirectUserToCompletePayment).not.toHaveBeenCalled();
									});

									describe('remove the user information from the database', function() {
										it('using the modules method removeDataFromDatabase', function() {
											expect(module.removeDataFromDatabase).toHaveBeenCalled();
										});

										it('using the modules method removeDataFromDatabase and proving it the datbase reference that contains the unqiueKey to remove', function() {
											expect(module.removeDataFromDatabase).toHaveBeenCalledWith("https://shining-heat-3928.firebaseio.com/oxroast/registration/2016" + "/" + unqiueKey);
										});
									});

									describe('throw an error to the user telling them why we can not continue processing', function() {
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
									
									module.submitForm(event);
								});

								describe('remove the user information from the database', function() {
									it('using the modules method removeDataFromDatabase', function() {
										expect(module.removeDataFromDatabase).toHaveBeenCalled();
									});

									it('using the modules method removeDataFromDatabase and proving it the datbase reference that contains the unqiueKey to remove', function() {
										expect(module.removeDataFromDatabase).toHaveBeenCalledWith("https://shining-heat-3928.firebaseio.com/oxroast/registration/2016" + "/" + unqiueKey);
									});
								});

								describe('throw an error to the user telling them why we can not continue processing', function() {
									it('using the modules method processError', function() {
										expect(module.processError).toHaveBeenCalled();
									});

									it('using the modules method processError and proving it a message that we cant communicate to PayPal', function() {
										expect(module.processError).toHaveBeenCalledWith({
											"errorMessage": "Sorry, we are having some trouble communicating to PayPal and can not complete your registration. We would love for you to attend this years Ohio Men's Ox Roast And Retreat, so please try again later or contact us at info@ohiomensoxroast.org and we can do your registration for you."
										});
									});
								});
							});
						});
					});

					describe('if the form is not valid', function() {
						beforeEach(function() {
							$.fn.valid.and.returnValue(false);

							module.submitForm(event);
						});

						it('dont serialize the submited form to an object', function() {
							expect(dataService.serializeToObject).not.toHaveBeenCalled();
						});

						it('dont prepare form data for submission', function() {
							expect(module.prepareDataForSubmission).not.toHaveBeenCalled();
						});

						it('dont make an ajax call to the server', function() {
							expect($.ajax).not.toHaveBeenCalled();
						});

						describe('show an error message', function() {
							it('by calling the modules processError method', function() {
								expect(module.processError).toHaveBeenCalled();
							});

							it('by calling the modules processError method with the correct error object', function() {
								expect(module.processError).toHaveBeenCalledWith({
									"errorMessage": "Please correct any highlighted fields."
								});
							});
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

			describe('redirectUserToCompletePayment', function() {
				it('that is defined', function() {
					expect(module.redirectUserToCompletePayment).toBeDefined();
				});

				it('that is a function', function() {
					expect(module.redirectUserToCompletePayment).toEqual(jasmine.any(Function));
				});

				describe('that when called', function() {
					describe('if the data passed to the function', function() {
						var data = {},
							unqiueKey = "",
							expectedRedirectUrl = "";

						beforeEach(function() {
							data = {
								"redirectUrl": "http://www.google.com?blah=you"
							};

							unqiueKey = "K820JEY";

							expectedRedirectUrl = data.redirectUrl + "&useraction=commit";

							spyOn(windowService, "redirect");
							spyOn(module, "processError");
						});

						describe('has a redirect url and a unqiue database key', function() {
							beforeEach(function() {
								module.redirectUserToCompletePayment(data, unqiueKey);
							});

							it('we dont throw an error', function() {
								expect(module.processError).not.toHaveBeenCalled();	
							});

							it('then the window service redirect method is called', function() {
								expect(windowService.redirect).toHaveBeenCalled();
							});

							it('then the window service redirect method is called with the correct redirect url', function() {
								expect(windowService.redirect).toHaveBeenCalledWith(expectedRedirectUrl);
							});
						});

						describe('doesnt have a redirect url', function() {
							beforeEach(function() {
								delete data.redirectUrl;

								module.redirectUserToCompletePayment(data, unqiueKey);
							});

							it('we throw an error using the modules processError method', function() {
								expect(module.processError).toHaveBeenCalled();
							});

							it('we throw an error using the modules processError method and giving it an error object', function() {
								expect(module.processError).toHaveBeenCalledWith(jasmine.any(Object));
							});

							it('then we dont call the window service redirect method', function() {
								expect(windowService.redirect).not.toHaveBeenCalled();
							});
						});
					});
				});
			});

			describe('addDataToDatabase', function() {
				it('that is defined', function() {
					expect(module.addDataToDatabase).toBeDefined();
				});

				it('that is a function', function() {
					expect(module.addDataToDatabase).toEqual(jasmine.any(Function));
				});

				describe('that when called', function() {
					var reference = "https://shining-heat-3928.firebaseio.com/oxroast/registration/2016",
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
						},
						returnValue = null,
						unqiueKey = "KDIE83KD";

					beforeEach(function() {
						spyOn(module, "processError");
						spyOn(dataService, "getReference").and.returnValue(rootRef);
						spyOn(dataService, "set");
					});

					describe('if the function is given the data to add to the db and the db reference', function() {
						beforeEach(function() {
							dataService.set.and.returnValue(unqiueKey);

							returnValue = module.addDataToDatabase(data, reference);
						});


						it('we dont throw an error', function() {
							expect(module.processError).not.toHaveBeenCalled();	
						});

						describe('then we get a reference to the Firebase registration data', function() {
							it('using the data service method getReference', function() {
								expect(dataService.getReference).toHaveBeenCalled();
							});

							it('using the data service method getReference and giving it the Firbase url', function() {
								expect(dataService.getReference).toHaveBeenCalledWith(reference);
							});
						});

						describe('then we use the Firbase reference to push new data to the no SQL DB', function() {
							it('using the data service method set', function() {
								expect(dataService.set).toHaveBeenCalled();
							});

							it('using the data service method set and giving it the Firbase reference and data to added to Firebase', function() {
								expect(dataService.set).toHaveBeenCalledWith(rootRef, data);
							});
						});

						it('then we return the genterated unqiueKey', function() {
							expect(returnValue).toEqual(unqiueKey);
						});
					});

					describe('if the function isnt given any data', function() {
						beforeEach(function() {
							returnValue = module.addDataToDatabase();
						});

						describe('then throw an error', function() {
							it('using the modules processError method', function() {
								expect(module.processError).toHaveBeenCalled();
							});

							it('using the modules processError method and giving it an error object', function() {
								expect(module.processError).toHaveBeenCalledWith(jasmine.any(Object));
							});
						});

						it('then we dont get a reference to the Firebase registration data', function() {
							expect(dataService.getReference).not.toHaveBeenCalled();
						});

						it('then we dont use the Firebase reference to push data to the no SQL DB', function() {
							expect(dataService.set).not.toHaveBeenCalled();
						});

						it('then we return null', function() {
							expect(returnValue).toEqual(null);
						});
					});

					describe('if the function isnt given a db reference', function() {
						beforeEach(function() {
							returnValue = module.addDataToDatabase(data);
						});

						describe('then throw an error', function() {
							it('using the modules processError method', function() {
								expect(module.processError).toHaveBeenCalled();
							});

							it('using the modules processError method and giving it an error object', function() {
								expect(module.processError).toHaveBeenCalledWith(jasmine.any(Object));
							});
						});

						it('then we dont get a reference to the Firebase registration data', function() {
							expect(dataService.getReference).not.toHaveBeenCalled();
						});

						it('then we dont use the Firebase reference to push data to the no SQL DB', function() {
							expect(dataService.set).not.toHaveBeenCalled();
						});

						it('then we return null', function() {
							expect(returnValue).toEqual(null);
						});
					});
				});
			});

			describe('removeDataFromDatabase', function() {
				it('that is defined', function() {
					expect(module.removeDataFromDatabase).toBeDefined();
				});

				it('that is a function', function() {
					expect(module.removeDataFromDatabase).toEqual(jasmine.any(Function));
				});

				describe('that when called', function() {
					var reference = "https://shining-heat-3928.firebaseio.com/oxroast/registration/2016",
						rootRef = new window.Firebase(reference),
						unqiueKey = "KDIE83KD",
						givenReference = reference + "/" + unqiueKey;

					beforeEach(function() {
						spyOn(dataService, "getReference").and.returnValue(rootRef);
						spyOn(dataService, "set");
					});

					describe('if a database reference was provided', function() {
						beforeEach(function() {
							module.removeDataFromDatabase(givenReference);	
						});

						describe('then we get a reference to the Firebase registration data', function() {
							it('using the data service method getReference', function() {
								expect(dataService.getReference).toHaveBeenCalled();
							});

							it('using the data service method getReference and giving it the Firbase url that contains the unqiueKey', function() {
								expect(dataService.getReference).toHaveBeenCalledWith(givenReference);
							});
						});

						describe('then we use the Firbase reference to push new data of null for the unqiueKey to the no SQL DB', function() {
							it('using the data service method set', function() {
								expect(dataService.set).toHaveBeenCalled();
							});

							it('using the data service method set and giving it the Firbase reference and data of null to set in Firebase', function() {
								expect(dataService.set).toHaveBeenCalledWith(rootRef, null);
							});
						});
					});

					describe('if a database reference wasnt provided', function() {
						beforeEach(function() {
							module.removeDataFromDatabase();	
						});

						it('then we dont get a reference to the Firebase registration data', function() {
							expect(dataService.getReference).not.toHaveBeenCalled();
						});

						it('then we dont use the Firebase reference to push new data of null for the unqiueKey to the no SQL DB', function() {
							expect(dataService.set).not.toHaveBeenCalled();
						});
					});
				});

			});

			describe('prepareDataForSubmission', function() {
				it('that is defined', function() {
					expect(module.prepareDataForSubmission).toBeDefined();
				});

				it('that is a function', function() {
					expect(module.prepareDataForSubmission).toEqual(jasmine.any(Function));
				});

				describe('that when called', function() {
					var data = {
						"PAYMENTREQUEST_0_AMT": "325",
						"guestList": "{\"guest\": []}",
						"golfPass":  "G",
						"eventPass": "1",
						"church-atteding": "test",
						"EMAIL": "t@test.com",
						"PAYMENTREQUEST_0_SHIPTOPHONENUM": "1234567890",
						"lastname": "test",
						"firstname": "test",
						"guest_firstname": "blah",
						"guest_lastname": "blah"
					},
					returnValue = null;

				
					describe('converts guestList into guests', function() {
						beforeEach(function() {
							spyOn(JSON, "parse").and.returnValue({guest: []});

							returnValue = module.prepareDataForSubmission(data);
						});

						describe('by first parsing the guestList data provided', function() {
							it('using JSON.parse method', function() {
								expect(JSON.parse).toHaveBeenCalled();
							});

							it('using JSON.parse method and giving it the data to parse', function() {
								expect(JSON.parse).toHaveBeenCalledWith(data.guestList);
							});
						});

						describe('then change the guestList property into guests property', function() {
							it('and return the new data object', function() {
								expect(returnValue).toEqual({
									"PAYMENTREQUEST_0_AMT": "325",
									"golfPass":  "G",
									"eventPass": "1",
									"church-atteding": "test",
									"EMAIL": "t@test.com",
									"PAYMENTREQUEST_0_SHIPTOPHONENUM": "1234567890",
									"lastname": "test",
									"firstname": "test",
									"guest_firstname": "blah",
									"guest_lastname": "blah",
									"guests": []
								});
							});
						});
					});

					describe('removes any unwanted fields from the object based on an array provided', function() {
						beforeEach(function() {
							spyOn(JSON, "parse").and.returnValue({guest: []});

							returnValue = module.prepareDataForSubmission(data, ["guest_firstname", "guest_lastname"]);
						});

						it('and return the new data object', function() {
							expect(returnValue).toEqual({
								"PAYMENTREQUEST_0_AMT": "325",
								"golfPass":  "G",
								"eventPass": "1",
								"church-atteding": "test",
								"EMAIL": "t@test.com",
								"PAYMENTREQUEST_0_SHIPTOPHONENUM": "1234567890",
								"lastname": "test",
								"firstname": "test",
								"guests": []
							});
						});
					});
				});
			});
		});
	});
});