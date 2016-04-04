define(['section/registrationForm', 'module/submitRegistration'], function (section, submitRegistration) {
	"use strict";

	var calledSection = null;

	describe('Registration Form section', function() {
		it('is defined', function() {
			expect(section).toBeDefined();
		});

		it('returns a function', function() {
			expect(section).toEqual(jasmine.any(Function));	
		});

		it('contains a function called init', function() {
			calledSection = section({
				"scope": "#registration-form"
			});

			expect(calledSection.init).toEqual(jasmine.any(Function));
		});

		it('contains a function called loadContent', function() {
			calledSection = section({
				"scope": "#registration-form"
			});

			expect(calledSection.loadContent).toEqual(jasmine.any(Function));
		});

		it('contains a function called subscribe', function() {
			calledSection = section({
				"scope": "#registration-form"
			});

			expect(calledSection.subscribe).toEqual(jasmine.any(Function));
		});

		describe('when the init function is called', function() {
			beforeEach(function() {
				spyOn(submitRegistration, "bindEvents");

				calledSection = section({
					"scope": "#registration-form"
				});

				calledSection.init();
			});

			it('we bindEvents for the submitRegistration module', function() {
				expect(submitRegistration.bindEvents).toHaveBeenCalled();
			});

			it('we bindEvents for the submitRegistration module and give it the correct settings', function() {
				expect(submitRegistration.bindEvents).toHaveBeenCalledWith({"scope": "#registration-form"});
			});
		});
	});
});