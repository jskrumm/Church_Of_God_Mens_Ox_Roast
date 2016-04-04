define(['section/confirmation', 'module/registrationDetails'], function (section, registrationDetails) {
	"use strict";

	var calledSection = null;

	describe('Confirmation section', function() {
		it('is defined', function() {
			expect(section).toBeDefined();
		});

		it('returns a function', function() {
			expect(section).toEqual(jasmine.any(Function));	
		});

		it('contains a function called init', function() {
			calledSection = section({
				"scope": "#registration-details"
			});

			expect(calledSection.init).toEqual(jasmine.any(Function));
		});

		it('contains a function called loadContent', function() {
			calledSection = section({
				"scope": "#registration-details"
			});

			expect(calledSection.loadContent).toEqual(jasmine.any(Function));
		});

		it('contains a function called subscribe', function() {
			calledSection = section({
				"scope": "#registration-details"
			});

			expect(calledSection.subscribe).toEqual(jasmine.any(Function));
		});

		describe('when the init function is called', function() {
			beforeEach(function() {
				spyOn(registrationDetails, "listen");

				calledSection = section({
					"scope": "#registration-details"
				});

				calledSection.init();
			});

			it('we add a listener for the registrationDetails module', function() {
				expect(registrationDetails.listen).toHaveBeenCalled();
			});
		});

		describe('when the subscribe function is called', function() {
			beforeEach(function() {
				spyOn($.fn, "on");

				calledSection = section({
					"scope": "#registration-details"
				});

				calledSection.subscribe();
			});

			it('should bind a message', function() {
				expect($.fn.on).toHaveBeenCalled();
			});

			it('should bind a messag of confirmation:load and the sections loadContent function', function() {
				expect($.fn.on).toHaveBeenCalledWith("confirmation:load", calledSection.loadContent);
			});
		});

		describe('when the loadContent function is called', function() {
			beforeEach(function() {
				spyOn($.fn, "trigger");

				calledSection = section({
					"scope": "#registration-details"
				});

				calledSection.loadContent();
			});

			it('should trigger a message', function() {
				expect($.fn.trigger).toHaveBeenCalled();
			});

			it('should trigger a message of registrationDetails:load', function() {
				expect($.fn.trigger).toHaveBeenCalledWith("registrationDetails:load");
			});
		});
	});
});