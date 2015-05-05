define(['lodash', 'service/register'], function  (_, service) {
	var returnVal = null,
		currentTotal = null,
		validPriceArray = ["55", "25", "5"],
		invalidPriceArray = ["55", "4"],
		undefinedPriceArray = ["55", undefined],
		nullPriceArray = ["55", null],
		emptyPriceArray = ["55", ""],
		validPriceArrayTotal = _.sum(validPriceArray),
		expectedTotal = null;

	describe('Register module', function() {
		afterEach(function() {
			returnVal = null;
			currentTotal = null;
			expectedTotal = null;
		});

		describe('Given we have valid pass prices an no current total', function() {
			beforeEach(function() {
				returnVal = service.total(validPriceArray);
			});

			it('Then we should return the sum of the validPriceArray', function() {
				expect(returnVal).toEqual(validPriceArrayTotal);
			});
		});

		describe('Given we have valid pass prices and a current total', function() {
			beforeEach(function() {
				currentTotal = "100";
				expectedTotal = _.add(validPriceArrayTotal, currentTotal);

				returnVal = service.total(validPriceArray, currentTotal);
			});

			it('Then we should return the sum of the validPriceArray + the current total', function() {
				expect(returnVal).toEqual(expectedTotal);
			});
		});

		describe('Given one of the pass prices is not valid and we have no current total', function() {
			beforeEach(function() {
				returnVal = service.total(invalidPriceArray);
			});

			it('Then we should return 0', function() {
				expect(returnVal).toEqual(0);
			});
		});

		describe('Given one of the pass prices is not valid and we have a current total', function() {
			beforeEach(function() {
				currentTotal = "85";
				returnVal = service.total(invalidPriceArray, currentTotal);
			});

			it('Then we should return the current total', function() {
				expect(returnVal).toEqual(currentTotal);
			});
		});

		describe('Given one of the pass prices is undefined and we have no current total', function() {
			beforeEach(function() {
				returnVal = service.total(undefinedPriceArray);
			});

			it('Then we should return 0', function() {
				expect(returnVal).toEqual(0);
			});
		});

		describe('Given one of the pass prices is undefined and we have a current total', function() {
			beforeEach(function() {
				currentTotal = "50";
				returnVal = service.total(undefinedPriceArray, currentTotal);
			});

			it('Then we should return the current total', function() {
				expect(returnVal).toEqual(currentTotal);
			});
		});


		describe('Given one of the pass prices is null and we have no current total', function() {
			beforeEach(function() {
				returnVal = service.total(nullPriceArray);
			});

			it('Then we should return 0', function() {
				expect(returnVal).toEqual(0);
			});
		});

		describe('Given one of the pass prices is null and we have a current total', function() {
			beforeEach(function() {
				currentTotal = "110";
				returnVal = service.total(nullPriceArray, currentTotal);
			});

			it('Then we should return the current total', function() {
				expect(returnVal).toEqual(currentTotal);
			});
		});


		describe('Given one of the pass prices is empty and we have no current total', function() {
			beforeEach(function() {
				returnVal = service.total(emptyPriceArray);
			});

			it('Then we should return 0', function() {
				expect(returnVal).toEqual(0);
			});
		});

		describe('Given one of the pass prices is empty and we have a current total', function() {
			beforeEach(function() {
				currentTotal = "255";
				returnVal = service.total(emptyPriceArray, currentTotal);
			});

			it('Then we should return the current total', function() {
				expect(returnVal).toEqual(currentTotal);
			});
		});
	});
});