define(['module/registerGuest'], function (registerGuest) {
	"use strict";
	var module = registerGuest;

	describe('Register Guest Module', function() {
		describe('has a function', function() {
			describe('called bindEvents', function() {
				it('that is defined', function() {
					expect(module).toBeDefined();
				});

				describe('and when called', function() {
					beforeEach(function() {
						spyOn($.fn, "on");

						module.bindEvents({"scope": "#generalInfo"});
					});

					it('binds events using jQuery on', function() {
						expect($.fn.on).toHaveBeenCalled();
					});

					it('binds 2 event', function() {
						expect($.fn.on.calls.count()).toEqual(2);
					});

					it('binds a click event to a button, within the scope, that has a class of "yes" and calls a function called "showGuestInputs"', function() {
						expect($.fn.on.calls.argsFor(0)).toEqual(["click", "button.yes", module.showGuestInputs]);
					});

					it('binds a click event to a button, within the scope that has a class of "no" and calls a function called "hideGuestInputs"', function() {
						expect($.fn.on.calls.argsFor(1)).toEqual(["click", "button.no", module.hideGuestInputs]);
					});
				});
			});

			describe('called showGuestInputs', function() {
				beforeEach(function() {
					spyOn($.fn, "rules");	
				});

				it('that is defined', function() {
					expect(module.showGuestInputs).toBeDefined();
				});

				describe('and when called', function() {
					describe('updates the value of a hidden filed called "hasGuest"', function() {
						beforeEach(function() {
							spyOn($.fn, "val");
							module.showGuestInputs();
						});

						it('using jquery val function', function() {
							expect($.fn.val).toHaveBeenCalled();
						});

						it('using jQuery val function with the new value', function() {
							expect($.fn.val).toHaveBeenCalledWith(true);
						});
					});

					describe('removes a class of hidden from the guests field wrapper', function() {
						beforeEach(function() {
							spyOn($.fn, "removeClass");
							module.showGuestInputs();
						});

						it('using jQuery removeClass function', function() {
							expect($.fn.removeClass).toHaveBeenCalled();
						});

						it('using jQuery removeClass function with a string of hidden', function() {
							expect($.fn.removeClass).toHaveBeenCalledWith("hidden");
						});
					});
				});
			});

			describe('call hideGuestInputs', function() {
				beforeEach(function() {
					spyOn($.fn, "rules");	
				});

				it('that is defined', function() {
					expect(module.hideGuestInputs).toBeDefined();
				});

				describe('and when called', function() {
					describe('updates the value of a hidden field called "hasGuest"', function() {
						beforeEach(function() {
							spyOn($.fn, "val");
							module.hideGuestInputs();
						});

						it('using jquery val function', function() {
							expect($.fn.val).toHaveBeenCalled();
						});

						it('using jQuery val function with the new value', function() {
							expect($.fn.val).toHaveBeenCalledWith(false);
						});
					});

					describe('adds a class of hidden from the guests field wrapper', function() {
						beforeEach(function() {
							spyOn($.fn, "addClass");
							module.hideGuestInputs();
						});

						it('using jQuery addClass function', function() {
							expect($.fn.addClass).toHaveBeenCalled();
						});


						it('using jQuery addClass function with a string of hidden', function() {
							expect($.fn.addClass).toHaveBeenCalledWith("hidden");
						});
					});
				});
			});
		});
	});
});