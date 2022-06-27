import { getTestBed, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { TestServiceService } from './test-service.service';

const POST_STAB = {
  userId: 1,
  id: 1,
  title:
    'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
};

const POST_STAB_LIST = [POST_STAB, POST_STAB];
describe('TestServiceService', () => {
  let service: TestServiceService;
  let injector: TestBed;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TestServiceService],
    });
    injector = getTestBed();
    service = TestBed.inject(TestServiceService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be call getAll() and return Post[]', () => {
    service.getAll().subscribe((data) => {
      expect(data).toEqual(POST_STAB_LIST);
    });

    const req = httpController.expectOne({
      method: 'get',
      url: service.api,
    });

    req.flush(POST_STAB_LIST);
  });

  it('should be call getOne() and return Post', () => {
    service.getOne().subscribe((res) => {
      expect(res).toEqual(POST_STAB);
    });

    const req = httpController.expectOne({
      method: 'get',
      url: service.api,
    });

    req.flush(POST_STAB);
  });

  it('should be call create() and return Post', () => {
    service.create(POST_STAB).subscribe((data) => {
      expect(data).toEqual(POST_STAB);
    });

    const req = httpController.expectOne({
      method: 'post',
      url: service.api,
    });

    req.flush(POST_STAB);
  });

  it('should be call update() and return Post[]', () => {
    service.update(POST_STAB).subscribe((data) => {
      expect(data).toEqual(POST_STAB);
    });

    const req = httpController.expectOne({
      method: 'put',
      url: service.api,
    });

    req.flush(POST_STAB);
  });

  it('should be call delete() and return Post[]', () => {
    service.delete(POST_STAB).subscribe((data) => {
      expect(data).toEqual(POST_STAB);
    });

    const req = httpController.expectOne({
      method: 'delete',
      url: service.api,
    });

    req.flush(POST_STAB);
  });
});
