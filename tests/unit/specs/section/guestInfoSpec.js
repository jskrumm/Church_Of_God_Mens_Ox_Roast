define(['section/guestInfo', 'module/passes'], function (guestInfo, passes) {
	"use strict";

	var section = guestInfo,
		calledSection = null;

	describe('Guest Info section', function() {
		it('is defined', function() {
			expect(section).toBeDefined();
		});

		it('returns a function', function() {
			expect(section).toEqual(jasmine.any(Function));	
		});

		it('contains a function called init', function() {
			calledSection = section({
				"scope": "#guests"
			});

			expect(calledSection.init).toEqual(jasmine.any(Function));
		});

		it('contains a function called loadContent', function() {
			calledSection = section({
				"scope": "#guests"
			});

			expect(calledSection.loadContent).toEqual(jasmine.any(Function));
		});

		it('contains a function called subscribe', function() {
			calledSection = section({
				"scope": "#guests"
			});

				expect(calledSection.subscribe).toEqual(jasmine.any(Function));
		});

		describe('when the init function is called', function() {
			beforeEach(function() {
				spyOn(passes, "bindEvents");

				calledSection = section({
					"scope": "#guests"
				});

				calledSection.init();
			});

			it('we bindEvents for the passes module', function() {
				expect(passes.bindEvents).toHaveBeenCalled();
			});

			it('we bindEvents for the passes module and give it the correct settings', function() {
				expect(passes.bindEvents).toHaveBeenCalledWith({"scope": "#guests"});
			});
		});
	});
});