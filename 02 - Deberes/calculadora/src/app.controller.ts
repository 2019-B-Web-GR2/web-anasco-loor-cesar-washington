import {Controller, Get, Headers, Response, Post, Body, Put, Query, Delete, Header, Request} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/calculadora')
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get('/hola')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/suma')
  sumar(@Headers() headers, @Response() response, @Request() request) {
    if (headers.numero1 && headers.numero2) {

      const numeroUno = Number(headers.numero1);
      const numeroDos = Number(headers.numero2);

      const resultado = numeroUno + numeroDos;
      return response.status(200).send('La respuesta es: ' + resultado);
    } else {
      return response.status(400).send('Error de parametros');
    }
  }

  @Post('/resta')
  resta(@Request() request, @Body() body, @Response() response) {
    if (body.numero1 && body.numero2) {

      const numeroUno = Number(body.numero1);
      const numeroDos = Number(body.numero2);

      const resultado = numeroUno - numeroDos;
      return response.status(201).send('La respuesta es: ' + resultado);
    } else {
      return response.status(400).send('Error de parametros');
    }
  }

  @Put('multiplicacion')
  multiplicar(@Request() request, @Query() query, @Response() response) {
    if (query.numero1 && query.numero2) {

      const numeroUno = Number(query.numero1);
      const numeroDos = Number(query.numero2);

      const resultado = numeroUno * numeroDos;
      return response.status(202).send('La respuesta es: ' + resultado);
    } else {
      return response.status(400).send('Error de parametros');
    }
  }

  @Delete('division')
  dividir(@Request() request, @Query() query, @Body()  body, @Response() response) {
    if (body.numero1 && query.numero2) {

      const numeroUno = Number(body.numero1);
      const numeroDos = Number(query.numero2);

      if (numeroDos === 0) {
        return response.status(400).send('Divisor ' + query.numero2 + ' no puede ser igual a 0');
      } else {
        const resultado = numeroUno / numeroDos;
        return response.status(203).send('La respuesta es: ' + resultado);
      }
    }
  }
}
