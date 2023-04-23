import express from 'express';
import { OperatorNotFound } from './operators.errors.js';
import { getOperator } from './operators.service.js';

export const operatorsRouter = express.Router();

operatorsRouter
    .get( 
        '/:operatorId'
        , ( req, res ) => {
            const operatorId = Number( req.params.operatorId );
            const operator = getOperator( operatorId );

            if ( !operator ) {
                const operatorNotFound = new OperatorNotFound();
                return res
                    .status( operatorNotFound.statusCode )
                    .json( operatorNotFound );
            }

            return res
                .status( 200 )
                .json( operator )
        }
    );