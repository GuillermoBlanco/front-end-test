import { fetchFrees } from './free-now';

test('gets a list from the response', () =>
fetchFrees().then(response => expect(response).toEqual(
        expect.objectContaining({ poiList: expect.any(Array) })
      ))
);

test('gets a list of poiList with the needed properties', () => {
    return fetchFrees()
        .then(response => 
            expect(response.poiList).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        coordinate: expect.objectContaining({ latitude: expect.any(Number), longitude: expect.any(Number) }),
                        state: expect.any(String),
                        type: expect.any(String),
                        id: expect.any(Number)
                    })
                ])
            )
        );    
});
