define(["service/window"], function (service) {
	"use strict";

	describe('Window Service', function() {
		it('that is defined', function() {
			expect(service).toBeDefined();
		});

		it('is an object', function() {
			expect(service).toEqual(jasmine.any(Object));
		});

		describe('contains a function called', function() {
			describe('redirect', function() {
				it('is defined', function() {
					expect(service.redirect).toBeDefined();
				});

				it('is a function', function() {
					expect(service.redirect).toEqual(jasmine.any(Function));
				});
			});
		});
	});
});