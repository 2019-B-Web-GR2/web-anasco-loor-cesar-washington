import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {UsuarioModule} from "./usuario/usuario.module";
import {UsuarioService} from "./usuario/usuario.service";

@Module({
    imports: [
        UsuarioModule,
        TypeOrmModule.forRoot(
            {
                name: 'default', // Nombre cadena de Conex.
                type: 'mysql',
                host: 'localhost',
                port: 32773,
                username: 'nika',
                password: '1234',
                database: 'web',
                dropSchema: true,
                entities: [
                    UsuarioEntity
                ],
                synchronize: true, // Crear -> true , Conectar -> false
            }
        ),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(
        private _usuarioService: UsuarioService,
    ) {

    }
}
