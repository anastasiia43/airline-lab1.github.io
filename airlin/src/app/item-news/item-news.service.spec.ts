import { TestBed } from '@angular/core/testing';
import {NewsModels} from '../NewsModels'
import { ItemNewsServer } from './item-news.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('HomeService', () => {
  let service: ItemNewsServer;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  const homeUrl = 'http://127.0.0.1:8000/news/1/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemNewsServer],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ItemNewsServer);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getPlaylists', () => {
    let expectedData: NewsModels;

    beforeEach(() => {
      expectedData = {
        id: 1,
        title: "Air Canada",
        about: "French-language media in Canada report that legacy carrier Air Canada is looking to exit its planned takeover of Transat AT, the parent company of Air Transat, as Canada’s biggest airline attempts to manage through the coronavirus crisis while preserving its liquidity.Neither Air Canada nor Transat would comment on the news reports, which first appeared in the French-language daily Journal de Montreal on 2 June. The story cites three sources that say Air Canada is lobbying the Canadian government to block the deal.Montreal-headquartered Air Canada on 2 June denied that recent meetings with the government had anything to do with the Transat tie-up.“All meetings registered by Air Canada with government ministers relate to the impact of Covid-19, not the Transat acquisition,” a spokesperson tells FlightGlobal.When asked specifically about the merger, and the coronavirus’ effects on the company’s strategy regarding Transat, he adds, “There is no change to what we have said previously, which is we are awaiting the outcome of the regulatory review process.”Transat is the parent company of vacation specialist carrier Air Transat, the number three airline in Canada behind Air Canada and Calgary-based WestJet, and operates a sizable vacation package business.Last August, Transat’s shareholders voted overwhelmingly in favour of Air Canada’s C$720 million ($513 million) takeover bid for the company. That calculates out to C$18 per share. Both entities had said they had expected the transaction to close in the second quarter of 2020, but as time went on that looked less and less likely.",
        date: "2020-06-09",
        photo1: "https://media.foxbusiness.com/BrightCove/854081161001/202003/452/854081161001_6140429394001_6140428878001-vs.jpg",
        photo2: "https://www.kiplinger.com/slideshow/investing/T052-S001-best-airline-stocks-to-own-industry-takes-off/images/intro.jpg"
       } as NewsModels;
    });

    it('should return expected news by calling once', () => {
      service.getTask(1).subscribe(
        data => expect(data).toEqual(expectedData, 'should return expected news'),
        fail
      );

      const req = httpTestingController.expectOne(homeUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedData);
    });

    
  });
});