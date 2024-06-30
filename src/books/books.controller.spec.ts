// books.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { BookModel } from './schemas/book.schema'; // Importa el modelo BookModel

describe('BooksController', () => {
  let controller: BooksController;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [
        BooksService,
        {
          provide: 'BookModel', // Nombre del proveedor (puede ser una cadena o un símbolo)
          useValue: {}, // Aquí debes proporcionar una instancia válida de tu modelo BookModel
        },
      ],
    }).compile();

    controller = module.get<BooksController>(BooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Otras pruebas del controlador aquí
});
