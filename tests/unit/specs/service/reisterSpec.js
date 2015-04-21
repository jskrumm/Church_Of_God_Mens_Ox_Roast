define(['service/register'], function  (service) {
	var returnVal = null,
		firstParam = null;
		secondParam = null;

	describe('Regiser Service', function() {
		afterEach(function() {
			returnVal = null;
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

				it('that is a function', function() {
					expect(service.total).toEqual(jasmine.any(Function));
				});

				describe('that when called', function() {
					beforeEach(function() {
						returnVal = service.total();
					});

					it('returns a number', function() {
						expect(returnVal).toEqual(jasmine.any(Number));
					});

					describe('returns 0 when', function() {
						it('passed an empty string for the first param', function() {
							returnVal = service.total("");

							expect(returnVal).toBe(0);
						});

						it('passed an empty string for the first and second param', function() {
							returnVal = service.total("", "");

							expect(returnVal).toBe(0);
						});

						it('passed undefined for the first param', function() {
							returnVal = service.total(undefined);

							expect(returnVal).toBe(0);
						});

						it('passed undefined for the first param and second param', function() {
							returnVal = service.total(undefined, undefined);

							expect(returnVal).toBe(0);
						});

						it('passed null for the first param', function() {
							returnVal = service.total(null);

							expect(returnVal).toBe(0);
						});

						it('passed null for the first and second param', function() {
							returnVal = service.total(null, null);

							expect(returnVal).toBe(0);
						});
					});

					describe('returns first param when', function() {
						beforeEach(function() {
							firstParam = "55";
						});

						it('second param is empty', function() {
							returnVal = service.total(firstParam);

							expect(returnVal).toBe(parseInt(firstParam));
						});

						it('second param is undefined', function() {
							returnVal = service.total(firstParam, undefined);

							expect(returnVal).toBe(parseInt(firstParam));
						});

						it('second param is null', function() {
							returnVal = service.total(firstParam, null);

							expect(returnVal).toBe(parseInt(firstParam));
						});
					});

					describe('returns the combinded total of the first param and the second param when', function() {
						beforeEach(function() {
							firstParam = "55";
							secondParam = "55";
						});

						it('both have been provided', function() {
							returnVal = service.total(firstParam, secondParam);

							expect(returnVal).toBe(parseInt(firstParam) + parseInt(secondParam));
						});
					});
				});
			});
		});
	});
});