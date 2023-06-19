import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';

import { FortaContractFactory } from './contracts';
import { PolygonFortaDsFortContractPositionFetcher } from './polygon/forta.ds_fort.contract-position-fetcher';
import { PolygonFortaFortTokenFetcher } from './polygon/forta.fort.token-fetcher';
import { PolygonFortaFortDsContractPositionFetcher } from './polygon/forta.fort_ds.contract-position-fetcher';

@Module({
  providers: [
    FortaContractFactory,
    PolygonFortaDsFortContractPositionFetcher,
    PolygonFortaFortDsContractPositionFetcher,
    PolygonFortaFortTokenFetcher,
  ],
})
export class FortaAppModule extends AbstractApp() {}
