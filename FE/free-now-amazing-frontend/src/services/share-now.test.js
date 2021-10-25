import { fetchShares } from './share-now';

test('gets a list from the response', () =>
fetchShares().then(response => expect(response).toEqual(
        expect.objectContaining({ placemarks: expect.any(Array) })
      ))
);

test('gets a list of placemarks with the needed properties', () => {
    return fetchShares()
        .then(response => 
            expect(response.placemarks).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        address: expect.any(String),
                        coordinates: expect.any(Array) ,
                        engineType: expect.any(String),
                        exterior: expect.any(String),
                        fuel: expect.any(Number),
                        interior: expect.any(String),
                        name: expect.any(String),
                        vin: expect.any(String),
                        id: expect.any(Number)
                    })
                ])
            )
        );    
});
