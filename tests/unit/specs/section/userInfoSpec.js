define(['section/userInfo', 'module/registerGuest'], function (userInfo, registerGuest) {
	"use strict";

	var section = userInfo,
		calledSection = null;

	describe('User Info section', function() {
		it('is defined', function() {
			expect(section).toBeDefined();
		});

		it('returns a function', function() {
			expect(section).toEqual(jasmine.any(Function));	
		});

		it('contains a function called init', function() {
			calledSection = section({
				"scope": "#generalInfo"
			});

			expect(calledSection.init).toEqual(jasmine.any(Function));
		});

		it('contains a function called loadContent', function() {
			calledSection = section({
				"scope": "#generalInfo"
			});

			expect(calledSection.loadContent).toEqual(jasmine.any(Function));
		});

		it('contains a function called subscribe', function() {
			calledSection = section({
				"scope": "#generalInfo"
			});

				expect(calledSection.subscribe).toEqual(jasmine.any(Function));
		});

		describe('when the init function is called', function() {
			beforeEach(function() {
				spyOn(registerGuest, "bindEvents");

				calledSection = section({
					"scope": "#generalInfo"
				});

				calledSection.init();
			});

			it('we bindEvents for the registerGuest module', function() {
				expect(registerGuest.bindEvents).toHaveBeenCalled();
			});

			it('we bindEvents for the registerGuest module and give it the correct settings', function() {
				expect(registerGuest.bindEvents).toHaveBeenCalledWith({"scope": "#generalInfo"});
			});
		});
	});
});