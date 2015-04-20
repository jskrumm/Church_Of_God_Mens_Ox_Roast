define(['page/registration'], function (registration) {
	"use strict";

	var page = registration;

	describe("registration page", function () {
		it("should be defined", function () {
			expect(page).toBeDefined();
		});

		it('should return an object', function() {
			expect(page).toEqual(jasmine.any(Object));	
		});

		describe('has a function', function() {
			describe('called init', function() {
				it('that is defined', function() {
					expect(page.init).toBeDefined();
				});

				describe('and when called', function() {
					beforeEach(function() {
						spyOn($.fn, "on");

						page.init();
					});

					it('listens for a message using jquery on', function() {
						expect($.fn.on).toHaveBeenCalled();
					});

					it('listens for a message call "document:ready" using jquery on and then calls a function called "startSections"', function() {
						expect($.fn.on).toHaveBeenCalledWith("document:ready", page.startSections);
					});
				});
			});
		});
	});
});