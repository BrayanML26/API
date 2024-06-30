// books.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { BookModel } from './schemas/book.schema'; // Importa el modelo BookModel

describe('BooksService', () => {
  let service: BooksService;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [
        BooksService,
        {
          provide: 'BookModel', // Nombre del proveedor (puede ser una cadena o un símbolo)
          useValue: {}, // Aquí debes proporcionar una instancia válida de tu modelo BookModel
        },
      ],
    }).compile();

    service = module.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Otras pruebas del servicio aquí
});
