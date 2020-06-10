import { TestBed } from '@angular/core/testing';
import {NewsModels} from '../NewsModels'
import { NewsServer } from './news.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('NewsServer', () => {
  let service: NewsServer;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  const homeUrl = 'http://127.0.0.1:8000/news/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsServer],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NewsServer);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getTaskList', () => {
    let expectedData: NewsModels[];

    beforeEach(() => {
      expectedData = [{
        id: 1,
        title: "Air Canada",
        about: "French-language media in Canada report that legacy carrier Air Canada is looking to exit its planned takeover of Transat AT, the parent company of Air Transat, as Canada’s biggest airline attempts to manage through the coronavirus crisis while preserving its liquidity.Neither Air Canada nor Transat would comment on the news reports, which first appeared in the French-language daily Journal de Montreal on 2 June. The story cites three sources that say Air Canada is lobbying the Canadian government to block the deal.Montreal-headquartered Air Canada on 2 June denied that recent meetings with the government had anything to do with the Transat tie-up.“All meetings registered by Air Canada with government ministers relate to the impact of Covid-19, not the Transat acquisition,” a spokesperson tells FlightGlobal.When asked specifically about the merger, and the coronavirus’ effects on the company’s strategy regarding Transat, he adds, “There is no change to what we have said previously, which is we are awaiting the outcome of the regulatory review process.”Transat is the parent company of vacation specialist carrier Air Transat, the number three airline in Canada behind Air Canada and Calgary-based WestJet, and operates a sizable vacation package business.Last August, Transat’s shareholders voted overwhelmingly in favour of Air Canada’s C$720 million ($513 million) takeover bid for the company. That calculates out to C$18 per share. Both entities had said they had expected the transaction to close in the second quarter of 2020, but as time went on that looked less and less likely.",
        date: "2020-06-09",
        photo1: "https://media.foxbusiness.com/BrightCove/854081161001/202003/452/854081161001_6140429394001_6140428878001-vs.jpg",
        photo2: "https://www.kiplinger.com/slideshow/investing/T052-S001-best-airline-stocks-to-own-industry-takes-off/images/intro.jpg"
       },
       {
        id: 2,
        title: "Coronavirus",
        about: "While no region has escaped impact of the coronavirus grounding, arguably its most immediate damage has been felt among Africa’s already struggling carriers.That is most notable in the continent’s most established air transport market South Africa. National carrier South African Airways is caught in a hinterland between administrators and ministers trying to salvage some kind of sustainable operation; state-owned regional carrier SA Express is on the brink of liquidation and private operator Comair has been forced to enter formal restructuring.While the specifics behind each of the operator’s troubles differ, the common thread is the extent to which the carriers were already struggling before the crisis. In effect, the forced halting of the scheduled passenger flights because of the pandemic pushed several over the edge.African carriers, as a whole, have failed to capitalise during what was the most profitable decade in the airline industry’s history.IATA projected African carriers would lose around $200 million in 2019 after a collective loss of $100 million in 2018. That marked an improvement on losses earler in the decade. IATA figures show African carriers have collectively made a loss every year since 2012,  a cumulative loss of more than $3 billion.Small wonder then that airlines that have not been able to tackle historic debts or strengthen their balance sheets during a relatively benign environment, should have found breathing space in short supply.”We saw African airlines in particularly starting the year in most cases in pretty weak financial condition and now they are being hit by the loss of revenues because of  border closures because of Covid-19 and in addition to that, many African economies are commodity dependent and that’s going to hamper their economies,” notes IATA chief economist Brian Pearce.",
        date: "2020-06-10",
        photo1: "https://3rxg9qea18zhtl6s2u8jammft-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/Virgin-Australia-The-Associated-Press-Darren-England-scaled-e1587468993416.jpeg",
        photo2: "https://g.foolcdn.com/editorial/images/539523/airplane-takeoff-getty.jpg"
    },
    {
        id: 3,
        title: "Airline and travel",
        about: "ASX-listed airline and travel stocks have taken a pummelling as tightening travel restrictions due to the coronavirus pandemic severely impact demand.Airlines around the globe have been slashing flight capacity with Virgin Australia Holdings (ASX: VAH) being the latest to announce plans to suspend all international flights until mid-June and cut domestic flight capacity in half.It follows Tuesday’s announcement that Qantas Airways (ASX: QAN) will cut international flights by around 90% until at least the end of May.The uncertainty of COVID-19’s continued spread and full impact also has earnings guidances on hold and investors on edge with many travel-related stocks losing half of their value over the past month.Virgin Australia today revealed it will suspend all international flights from 30 March to 14 June and reduce domestic capacity by 50% until 14 June.In addition, 53 aircraft have been temporarily grounded from the Virgin fleet.“We have entered an unprecedented time in the global aviation industry, which has required us to take significant action to responsibly manage our business while balancing traveller demands and supporting the wellbeing of Australians,” Virgin Australia chief executive officer and managing director Paul Scurrah said in a statement.“We have responded by making tough decisions which include reducing our domestic capacity and phasing in the temporary suspension of international flying for a period of two and a half months,” he added.Qantas’ plans to cut 90% of international capacity until the end of May (at a minimum) is up from its 23% reduction for the FY 2020 fourth quarter announced last week.In addition, the airline said it will reduce domestic capacity by about 60% over the same period.These large-scale reductions are equivalent to the grounding of around 150 aircraft, including almost all of Qantas’ wide-body fleet, the company stated.Likewise, Air New Zealand (ASX: AIZ) this week announced it will cut its long-haul (international) capacity by 85% “over the coming months” and will operate a minimal schedule to allow New Zealanders to return home and “to keep trade corridors with Asia and North America open”.",
        date: "2020-06-12",
        photo1: "https://smallcaps.com.au/wp-content/uploads/2020/03/Airline-stocks-ASX-travel-coronavirus-covid-19-Australia.jpg",
        photo2: "https://amadeuscontenthub.pl/wp-content/uploads/2019/08/Silhouette-of-an-airplane-just-after-take-off-during-sunset-640x377.jpg"
    },
    {
        id: 4,
        title: "The best and worst airlines 2020",
        about: "Ryanair’s troubled year of flight cancellations has added another dent to its public image, with passengers rating it the joint worst short-haul airline in the UK.Almost one in three passengers told us that they’d never fly with the low-cost carrier, even if was cheaper than the competition. From those who did venture on board, it received a customer score of just 45% – joint lowest with Vueling for short-haul flights. The customer service, cabin environment, boarding process, and food and drink on offer were all rated just two stars out of five by passengers.Yet there’s proof that flying with a budget airline doesn’t mean having a bad experience.Which? Recommended Providers Norwegian and Jet2 gained high customer scores of 76%, including four stars for customer service. Norwegian was also the only airline to get a four-star rating for value for money for its short-haul flights.Even more impressive is tiny Channel-Islands hopper, Aurigny, which topped the table with a score of 80% and four-star ratings for boarding, cabin environment and customer service.Best and worst airlines table – full results of our airline surveyBad year for British Airways British Airways cancellations may have done even more damage to its public image. Its customer scores of 52% for short-haul flights and 50% for long-haul are the worst it’s had since Which? introduced customer scores. It’s fallen behind Easyjet for short-haul flights, and for long-haul flights it’s rated worse than Thomas Cook and Thomson for the first time ever.A year of relentless bad publicity for BA, with decisions such as scrapping food on short-haul flights annoying some previously loyal customers, appears to have cost it dearly. It received just two stars for food and drink on both short and long-haul. Seat comfort and value for money were also rated with just two stars.",
        date: "2020-06-13",
        photo1: "https://dwkujuq9vpuly.cloudfront.net/news/wp-content/uploads/2017/12/AIRLINES-SURVEY-MAIN-960x480.jpg",
        photo2: "https://sm.mashable.com/mashable_sea/photo/default/https-s3-ap-northeast-1amazonawscom-psh-ex-ftnikkei-3937bb4_t41t.jpg"
    },
    {
        id: 5,
        title: "The Lowest Airline Safety Ratings",
        about: "When thinking about the range of qualities we look for in an airline, the ability to deliver us to our destination alive is at the top of the list (just slightly edging out leg room). Safety is primary when flying: we want to travel on airlines that are rigorous about safety inspections, use innovative navigation technology, and adhere to basic best practices, like making sure the plane is heading in the right direction and closing all doors before taking off.Unfortunately, some airlines—as per the ratings listed on AirlineRatings.com—have some work to do. The aviation safety–focused website performs a comprehensive analysis of data from several international aviation and government sources and gives every airline they monitor a numerical rating from 1 to 7. (Airlines that receive a 7 are considered the safest; those that receive a 1 are the least safe.) The ratings are based on several factors, including whether or not the airline is FAA-endorsed, if it meets International Civil Aviation Organization (ICAO) safety standards, and whether it operates only Russian-built aircrafts (which, apparently, automatically earns an air carrier a demerit).So which airlines flunked this evaluation? Here's a list of all the carriers evaluated by AirlineRating.com that received a 3 or lower, divided by rating and how likely we'd be to fly on them: Editor's Note: Since the publication of this piece, AirlineRatings.com has updated their ratings of certain carriers to reflect the distinct safety-related factors that airlines flying small aircrafts in difficult-to-access locations face. It is also important to note that the list of airlines rated by AirlineRatings.com is not comprehensive; therefore the airlines with the lowest safety ratings on the site could, in some cases, be safer than airlines not included on the list at all. For more information on how AirlineRatings.com makes their evaluations, please see their website.",
        date: "2020-06-20",
        photo1: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1047&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2016%2F01%2Fwackiest-airplanes-plane1215.jpg",
        photo2: "https://www.cedarandco.co.uk/wp-content/uploads/2017/10/airline_programs.jpg"
    },
    {
        id: 6,
        title: "Accept Government's Workforce Aid",
        about: "Ten major airlines have tentatively agreed to accept federal assistance to keep employees on their payrolls through Sept. 30 after balking for the past week over surprise terms presented by the Treasury Department.Alaska Airlines, Allegiant Air, American Airlines, Delta Air Lines, Frontier Airlines, Hawaiian Airlines, JetBlue Airways, United Airlines, SkyWest Airlines and Southwest Airlines will receive payroll support from the $25 billion set-aside for airlines in the coronavirus economic relief package, the Treasury Department said late Tuesday. An additional $4 billion in the CARES Act is dedicated to cargo airlines and $3 billion is for airline contractors.Every airline is eligible for funding equivalent to about three-quarters of its payroll. The amount available was less than airline executives had anticipated because the payroll assistance program was oversubscribed. The money is available as long as airlines don't release any workers, or reduce their pay and benefits, for six months and maintain a minimum level of service. Airlines also are not allowed to buy back stock or pay dividends until after September 2021 and are limited in how much they can pay executives.Own the Top-Performing Breakout Stock Every Month We all want to own breakout stocks every month. The only problem is finding them takes too long. Until now. Benzinga's Breakout Opportunity Letter sends you the name and ticker symbol of a breakout stock every month. Best of all, you can subscribe today with a special introductory offer. Click here to discover the next potential breakout stock.The money is a temporary lifeline for an industry with 750,000 workers that has been decimated by the coronavirus crisis, which forced most travel to cease. Hawaiian Airlines on Thursday, for example, reported a 45% decline in systemwide traffic in March and has cut 95% of its service for April. The number of paying customers going through Transportation Security Administration checkpoints is less than 4% from this time a year ago.Airlines are taking drastic steps to stay afloat, grounding nearly all their fleets, closing club lounges, borrowing from banks, canceling capital and nonessential expenditures, asking workers to take unpaid leave and sharply cutting executive pay. Earlier Tuesday, the International Air Transport Association forecast airlines worldwide would generate $314 billion less revenue this year than in 2019.",
        date: "2020-06-22",
        photo1: "https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2012/u.s.-airlines-accept-aid_1.jpg",
        photo2: "https://hexaware.com/wp-content/uploads/2019/10/airlines.jpg"
    }

    ] as NewsModels[];
    });

    it('should return expected news by calling once', () => {
      service.getTaskList().subscribe(
        data => expect(data).toEqual(expectedData, 'should return expected news'),
        fail
      );

      const req = httpTestingController.expectOne(homeUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedData);
    });

    it('should be OK returning no playlists', () => {
        service.getTaskList().subscribe(
          data => expect(data.length).toEqual(0, 'should have empty playlists array'),
          fail
        );
  
        const req = httpTestingController.expectOne(homeUrl);
        req.flush([]);
      });
  
      it('should return expected playlists when called multiple times', () => {
        service.getTaskList().subscribe();
        service.getTaskList().subscribe(
          data => expect(data).toEqual(expectedData, 'should return expected playlists'),
          fail
        );
  
        const requests = httpTestingController.match(homeUrl);
        expect(requests.length).toEqual(2, 'calls to getTaskList()');
  
        requests[0].flush([]);
        requests[1].flush(expectedData);
      });
    
  });
});