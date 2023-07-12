import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';

import { FortaContractFactory } from './contracts';
import { PolygonFortaFortDsContractPositionFetcher } from './polygon/forta.fort_ds.contract-position-fetcher';

@Module({
  providers: [FortaContractFactory, PolygonFortaFortDsContractPositionFetcher],
})
export class FortaAppModule extends AbstractApp() {}
