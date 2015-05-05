define(['lodash', 'service/register'], function  (_, service) {
	var returnVal = null,
		initalTotal = null,
		passPrice = null,
		priceArray = ["65", "55", "45", "35", "25", "5"],
		validPriceArray = ["55", "25", "5"],
		invalidPriceArray = ["55", "4"];

	describe('Regiser Service', function() {
		afterEach(function() {
			returnVal = null;
			initalTotal = null;
			passPrice = null;
		});

		it('is defined', function() {
			expect(service).toBeDefined();
		});

		it('should be an object', function() {
			expect(service).toEqual(jasmine.any(Object));
		});

		describe('contains a function', function() {
			describe('called total', function() {
				it('that is defined', function() {
					expect(service.total).toBeDefined();
				});

				describe('and when called', function() {
					describe('checks to see all pricing given is valid', function() {
						beforeEach(function() {
							spyOn(service, "isAllPricingValid");
							spyOn(service, "sum");

							service.total(validPriceArray);
						});

						it('using the services isAllPricingValid function', function() {
							expect(service.isAllPricingValid).toHaveBeenCalled();
						});

						it('using the services isAllPricingValid function with an array of values to check', function() {
							expect(service.isAllPricingValid).toHaveBeenCalledWith(validPriceArray);
						});
					});

					describe('when all pricing is valid', function() {
						beforeEach(function() {
							spyOn(service, "isAllPricingValid").and.returnValue(true);
						});

						describe('then we sum all of the pass values', function() {
							beforeEach(function() {
								spyOn(service, "sum").and.callThrough();

								service.total(validPriceArray, "55");
							});

							it('using the services sum function', function() {
								expect(service.sum).toHaveBeenCalled();
							});

							it('using the services sum function with the valid pricing array', function() {
								expect(service.sum).toHaveBeenCalledWith(validPriceArray);
							});
						});

						describe('and we add the sum of the pass values to the current total', function() {
							beforeEach(function() {
								spyOn(service, "sum").and.callThrough();
								spyOn(service, "add").and.callThrough();

								service.total(validPriceArray, "55");
							});

							it('using the services add function', function() {
								expect(service.add).toHaveBeenCalled();
							});

							it('using the services add function with the current total and the sum of the pass values', function() {
								expect(service.add).toHaveBeenCalledWith("55", 85);
							});
						});
					});

					describe('when all pricing is not valid', function() {
						beforeEach(function() {
							spyOn(service, "isAllPricingValid").and.returnValue(false);
							spyOn(service, "sum"),
							spyOn(service, "add");

							service.total(invalidPriceArray, "55");
						});

						it('then we do not call the sum function', function() {
							expect(service.sum).not.toHaveBeenCalled();
						});

						it('then we do not call the add function', function() {
							expect(service.add).not.toHaveBeenCalled();
						});
					});
				});
			});

			describe('called add', function() {
				it('that is defined', function() {
					expect(service.add).toBeDefined();
				});

				describe('and when called', function() {
					beforeEach(function() {
						spyOn(_, "add");

						initalTotal = "55";
						passPrice = "55";

						returnVal = service.add(initalTotal, passPrice);
					});

					it('calls the lodash function add', function() {
						expect(_.add).toHaveBeenCalled();
					});

					it('calls the lodash function with the correct inital total and the pass price', function() {
						expect(_.add).toHaveBeenCalledWith(initalTotal, passPrice);
					});
				});
			});

			describe('called isValueValid', function() {
				it('that is defined', function() {
					expect(service.isValueValid).toBeDefined();
				});

				describe('and when called', function() {
					describe('checks if a value is defined', function() {
						beforeEach(function() {
							spyOn(_, "isUndefined").and.returnValue(true);
							spyOn(_, "isNull").and.returnValue(false);
							spyOn(_, "isEmpty").and.returnValue(false);

							initalTotal = undefined;

							service.isValueValid(initalTotal);
						});

						it('using the lodash function isUndefined', function() {
							expect(_.isUndefined).toHaveBeenCalled();
						});

						it('using the lodash function isUndefined with a value of undefined', function() {
							expect(_.isUndefined).toHaveBeenCalledWith(initalTotal);
						});
					});

					describe('checks if a value is null', function() {
						beforeEach(function() {
							spyOn(_, "isUndefined").and.returnValue(false);
							spyOn(_, "isNull").and.returnValue(true);
							spyOn(_, "isEmpty").and.returnValue(false);

							initalTotal = null;

							service.isValueValid(initalTotal);
						});


						it('using the lodash function isNull', function() {
							expect(_.isNull).toHaveBeenCalled();
						});

						it('using the lodash function isNull with a value of null', function() {
							expect(_.isNull).toHaveBeenCalledWith(initalTotal);
						});
					});

					describe('checks if a value is empty', function() {
						beforeEach(function() {
							spyOn(_, "isUndefined").and.returnValue(false);
							spyOn(_, "isNull").and.returnValue(false);
							spyOn(_, "isEmpty").and.returnValue(true);

							initalTotal = "";

							service.isValueValid(initalTotal);
						});


						it('using the lodash function isEmpty', function() {
							expect(_.isEmpty).toHaveBeenCalled();
						});

						it('using the lodash function isEmpty with a value of null', function() {
							expect(_.isEmpty).toHaveBeenCalledWith(initalTotal);
						});
					});

					// describe('returns false when', function() {
					// 	it('value is undefined', function() {
					// 		initalTotal = undefined;

					// 		returnVal = service.isValueValid(initalTotal);

					// 		expect(returnVal).toBe(false);
					// 	});

					// 	it('value is null', function() {
					// 		initalTotal = null;

					// 		returnVal = service.isValueValid(initalTotal);

					// 		expect(returnVal).toBe(false);
					// 	});

					// 	it('value is empty', function() {
					// 		initalTotal = "";

					// 		returnVal = service.isValueValid(initalTotal);

					// 		expect(returnVal).toBe(false);
					// 	});
					// });

					// it('returns true when a value is defined, is not null, and is not empty', function() {
					// 	initalTotal = "55";

					// 	returnVal = service.isValueValid(initalTotal);

					// 	expect(returnVal).toBe(true);
					// });
				});
			});

			describe('called isPassPriceValid', function() {
				it('that is defined', function() {
					expect(service.isPassPriceValid).toBeDefined();
				});

				describe('and when called', function() {
					describe('checks to see if the value passed in is valid', function() {
						beforeEach(function() {
							spyOn(service, "isValueValid");
							spyOn(_, "indexOf");

							passPrice = "45";
							service.isPassPriceValid(passPrice);	
						});

						it('using the serivces isValueValid function', function() {
							expect(service.isValueValid).toHaveBeenCalled();
						});

						it('using the services isValueValid function with the correct pass price', function() {
							expect(service.isValueValid).toHaveBeenCalledWith(passPrice);
						});
					});

					describe('if the value is valid then we check if the value is a valid price value', function() {
						beforeEach(function() {
							spyOn(service, "isValueValid").and.returnValue(true);
							spyOn(_, "indexOf");

							passPrice = "45";
							service.isPassPriceValid(passPrice);	
						});

						it('using the lodash indexOf function', function() {
							expect(_.indexOf).toHaveBeenCalled();
						});

						it('using the lodash indexOf function with the price array and the value to look up', function() {
							expect(_.indexOf).toHaveBeenCalledWith(priceArray, passPrice);
						});
					});

					// describe('returns false', function() {
					// 	it('when the value passed is not valid', function() {
					// 		passPrice = undefined;
					// 		returnVal = service.isPassPriceValid(passPrice);

					// 		expect(returnVal).toBe(false);
					// 	});

					// 	it('when the value passed is valid but not in the price array', function() {
					// 		passPrice = "4";
					// 		returnVal = service.isPassPriceValid(passPrice);
							
					// 		expect(returnVal).toBe(false);
					// 	});
					// });

					// describe('returns true', function() {
					// 	it('when the value is valid and the value is in the price array', function() {
					// 		passPrice = "45";
					// 		returnVal = service.isPassPriceValid(passPrice);
							
					// 		expect(returnVal).toBe(true);
					// 	});
					// });
				});
			});

			describe('called isAllPricingValid', function() {
				it('that is defined', function() {
					expect(service.isAllPricingValid).toBeDefined();
				});

				describe('and when called', function() {
					describe('checks if the pricing value is valid on each array value', function() {
						beforeEach(function() {
							spyOn(service, "isPassPriceValid");

							service.isAllPricingValid(validPriceArray);
						});

						it('using the services isPassPriceValid function', function() {
							expect(service.isPassPriceValid).toHaveBeenCalled();
						});

						it('using the serivces isPassPriceValid function on each item in the array', function() {
							expect(service.isPassPriceValid.calls.count()).toEqual(3);
						});

						it('using the serivces isPassPriceValid function with the correct values for all calls made', function() {
							expect(service.isPassPriceValid.calls.argsFor(0)).toEqual([validPriceArray[0]]);
							expect(service.isPassPriceValid.calls.argsFor(1)).toEqual([validPriceArray[1]]);
							expect(service.isPassPriceValid.calls.argsFor(2)).toEqual([validPriceArray[2]]);
						});
					});

					describe('when the pricing value is valid', function() {
						it('the we return false', function() {
							returnVal = service.isAllPricingValid(invalidPriceArray);

							expect(returnVal).toBe(false);
						});
					});

					describe('when the pricing value is not valid', function() {
						it('then we return true', function() {
							returnVal = service.isAllPricingValid(validPriceArray);

							expect(returnVal).toBe(true);
						});
					});
				});
			});

			
			describe('called sum', function() {
				it('that is defined', function() {
					expect(service.sum).toBeDefined();
				});

				describe('and when called', function() {
					beforeEach(function() {
						spyOn(_, "sum");

						service.sum(validPriceArray);
					});

					it('calls the lodash function sum', function() {
						expect(_.sum).toHaveBeenCalled();
					});

					it('calls the lodash function sum with a valid array of values to sum', function() {
						expect(_.sum).toHaveBeenCalledWith(validPriceArray);
					});
				});
			});
		});
	});
});