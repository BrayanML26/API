// users.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserModel } from './schemas/user.schema'; // Importa el modelo UserModel

describe('UsersController', () => {
  let controller: UsersController;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: 'UserModel', // Nombre del proveedor (puede ser una cadena o un símbolo)
          useValue: {}, // Aquí debes proporcionar una instancia válida de tu modelo UserModel
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Otras pruebas del controlador aquí
});
