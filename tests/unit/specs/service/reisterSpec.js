define(['service/register'], function  (service) {
	var returnVal = null,
		initalTotal = null;
		passPrice = null;

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
						it('passed an empty string for the inital total', function() {
							returnVal = service.total("");

							expect(returnVal).toBe(0);
						});

						it('passed an empty string for the inital total and pass price', function() {
							returnVal = service.total("", "");

							expect(returnVal).toBe(0);
						});

						it('passed undefined for the inital total', function() {
							returnVal = service.total(undefined);

							expect(returnVal).toBe(0);
						});

						it('passed undefined for the inital total and pass price', function() {
							returnVal = service.total(undefined, undefined);

							expect(returnVal).toBe(0);
						});

						it('passed null for the inital total', function() {
							returnVal = service.total(null);

							expect(returnVal).toBe(0);
						});

						it('passed null for the inital total and pass price', function() {
							returnVal = service.total(null, null);

							expect(returnVal).toBe(0);
						});
					});

					describe('returns inital total when', function() {
						beforeEach(function() {
							initalTotal = "55";
						});

						it('pass price is empty', function() {
							returnVal = service.total(initalTotal);

							expect(returnVal).toBe(parseInt(initalTotal));
						});

						it('pass price is undefined', function() {
							returnVal = service.total(initalTotal, undefined);

							expect(returnVal).toBe(parseInt(initalTotal));
						});

						it('pass price is null', function() {
							returnVal = service.total(initalTotal, null);

							expect(returnVal).toBe(parseInt(initalTotal));
						});

						it('operand is undefined', function() {
							returnVal = service.total(initalTotal, "55", undefined);

							expect(returnVal).toBe(parseInt(initalTotal));
						});
					});

					describe('returns the correct total of the inital total and the pass price when', function() {
						beforeEach(function() {
							initalTotal = "55";
							passPrice = "55";
						});

						it('everything has been provided', function() {
							returnVal = service.total(initalTotal, passPrice, "add");

							expect(returnVal).toBe(parseInt(initalTotal) + parseInt(passPrice));
						});
					});
				});
			});
		});
	});
});