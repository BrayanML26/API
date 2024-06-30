// users.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UserModel } from './schemas/user.schema'; // Asegúrate de importar el modelo UserModel

describe('UsersService', () => {
  let service: UsersService;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: 'UserModel', // Nombre del proveedor (puede ser una cadena o un símbolo)
          useValue: {}, // Aquí debes proporcionar una instancia válida de tu modelo UserModel
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Otras pruebas del servicio aquí
});
