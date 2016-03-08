define(["service/data", "firebase"], function (service, Firebase) {
	var reference = "https://docs-examples.firebaseio.com/web/data",
		returnValue = null;

	describe('Data Service', function() {
		it('is defined', function() {
			expect(service).toBeDefined();
		});

		it('returns an object', function() {
			expect(service).toEqual(jasmine.any(Object));
		});

		describe('contains a function called', function() {
			describe('getReference', function() {
				it('that is defined', function() {
					expect(service.getReference).toBeDefined();		
				});

				it('that is a function', function() {
					expect(service.getReference).toEqual(jasmine.any(Function));
				});

				describe('that when it is called', function() {
					describe('with a valid Firebase reference url', function() {
						beforeEach(function() {
							spyOn(window, 'Firebase').and.callThrough();

							returnValue = service.getReference(reference);
						});

						it('a reference to the Firebase data object is created', function() {
							expect(window.Firebase).toHaveBeenCalled();
						});

						it('a reference to the Firebase data object is created based on the url provided', function() {
							expect(window.Firebase).toHaveBeenCalledWith(reference);
						});

						it('a reference to the Firebase data object is returned', function() {
							expect(returnValue).toEqual(jasmine.any(Object));
						});
					});
				});
			});

			describe('set', function() {
				it('that is defined', function() {
					expect(service.set).toBeDefined();
				});

				it('that is a function', function() {
					expect(service.set).toEqual(jasmine.any(Function));
				});

				describe('that when it is called', function() {
					var rootRef = new window.Firebase(reference),
						newRefAfterPush = {
							"set": jasmine.any(Function),
							"key": jasmine.any(Function)
						},
						expectedDataToSet = {
							"name": {
								"first": "blah",
								"last": "blah2"
							},
							"phoneNumber": "123456890",
							"email": "t@gmail.com",
							"church": "First Church Of God",
							"eventPass": "2 Day",
							"activityPasses": ["Paintbal", "Golf", "Fishing"],
							"guests": [
								{
									"name": {
										"first": "guest1",
										"last": "guest1last"
									},
									"eventPass": "1 Day",
									"activityPasses": ["Paintbal"]
								},
								{
									"name": {
										"first": "guest2",
										"last": "guest2last"
									},
									"eventPass": "1 Day",
									"activityPasses": ["Golf"]
								}
							],
							"total": "$100.00",
							"paymentConfirmed": false
						};

					beforeEach(function() {
						
						spyOn(rootRef, "push").and.returnValue(newRefAfterPush);
						spyOn(newRefAfterPush, "set");
						spyOn(newRefAfterPush, "key").and.returnValue("VEBx234");

						returnValue = service.set(rootRef, expectedDataToSet);
					});

					describe('sets data to a root reference given', function() {
						it('by creating a unique id using the Firebase "push" method', function() {
							expect(rootRef.push).toHaveBeenCalled();
						});

						describe('using the unique id provided by Firebase', function() {
							it('and then calling the Firebase "set" method', function() {
								expect(newRefAfterPush.set).toHaveBeenCalled();
							});

							it('and then calling the Firebase "set" method with the supplied data to add to the Firebase data object', function() {
								expect(newRefAfterPush.set).toHaveBeenCalledWith(expectedDataToSet);
							});
						});
					});

					describe('returns the unique id of the data record pushed', function() {
						it('by getting the unique id from the reference after the push', function() {
							expect(newRefAfterPush.key).toHaveBeenCalled();
						});

						it('after getting it from the Firebase "key" method', function() {
							expect(returnValue).toEqual("VEBx234");
						});
					});
				});
			});
		});
	});
});