import supertest from 'supertest';
import { app } from '../app';

const server = app.listen();
const request = supertest( server );

afterAll( () => server.close() );

describe( 'GET /operators/:operatorId', () => {

    it(
        'retrieves an existing operator'
        , async () => {
            const operator = {
                id: 845902
                , firstName: "Agnes"
                , lastName: "Erin"
                , email: "agnes.erin@veryableops.com"
            };

            const result = await request
                .get( `/operators/${ operator.id }` );

            expect( result.body )
                .toStrictEqual( operator );

            expect( result.status )
                .toBe( 200 );

        }
    );

    it(
        'returns an appropriate error when the operator does not exist'
        , async () => {
            const result = await request
                .get( '/operators/-1' );

            const expectedStatusCode = 404;

            expect( result.body )
                .toStrictEqual( {
                    message: expect.any( String )
                    , code: 'OPERATOR_NOT_FOUND'
                    , statusCode: expectedStatusCode
                } );

            expect( result.status )
                .toBe( expectedStatusCode );

        }
    );
} );