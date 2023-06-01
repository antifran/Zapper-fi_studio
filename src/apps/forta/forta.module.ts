import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';

import { FortaContractFactory } from './contracts';
import { PolygonFortaDsFortContractPositionFetcher } from './polygon/forta.ds_fort.contract-position-fetcher';
import { PolygonFortaFortTokenFetcher } from './polygon/forta.fort.token-fetcher';

@Module({
  providers: [FortaContractFactory, PolygonFortaDsFortContractPositionFetcher, PolygonFortaFortTokenFetcher],
})
export class FortaAppModule extends AbstractApp() {}
