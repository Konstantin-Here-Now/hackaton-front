import { Module, CacheModule, CacheInterceptor } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobModel } from 'domain/models/JobModel';
import { CacheService } from 'infrastructure/cache';
import { setEnvironment } from 'infrastructure/environments';
import { AuthModule } from 'infrastructure/ioc/auth.module';
import { JobModule } from 'infrastructure/ioc/job.module';

import { UserMetaModule } from 'infrastructure/ioc/userMeta.module';
import { UsersModule } from 'infrastructure/ioc/users.module';
import { HealthController } from 'infrastructure/terminus/index';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    UserMetaModule,
    JobModule,

    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: setEnvironment(),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '0.0.0.0',
      port: 5452,
      username: 'morgan',
      password: 'test',
      database: 'users',
      entities: [__dirname + '/**/common/entities/*.entity{.ts,.js}'],
      // entities: [UserEntity],
      synchronize: true,
      logging: true,
      logger: 'file',
    }),
    CacheModule.registerAsync({
      useClass: CacheService,
    }),
    TerminusModule,
  ],
  controllers: [HealthController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
