define(["module/submitRegistration"], function (module) {
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
		});
	});
});