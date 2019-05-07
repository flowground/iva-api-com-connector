# ![LOGO](logo.png) Entertainment Express **flow**ground Connector

## Description

A generated **flow**ground connector for the Entertainment Express API (version 2.0).

Generated from: https://api.apis.guru/v2/specs/iva-api.com/2.0/swagger.json<br/>
Generated at: 2019-05-07T17:42:31+03:00

## API Description

Your Gateway to Building Incredible Movie, TV, and Game Content Discovery Experiences.

## Authorization

Supported authorization schemes:
- API Key- API Key
## Actions

### Viewers by City.

> No required parameters, DateValue defaults to Today..

*Tags:* `Analytics`

#### Input Parameters
* `ReportTag` - _optional_ - Report Tag filter.
* `Start` - _optional_ - Report start date
* `End` - _optional_ - Report end date
* `DateValue` - _optional_ - Days spanned by report
    Possible values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days.
* `Limit` - _optional_ - Number of records returned from top of response

### Viewers by Country.

> No required parameters, DateValue defaults to Today.

*Tags:* `Analytics`

#### Input Parameters
* `ReportTag` - _optional_ - Report Tag filter.
* `Start` - _optional_ - Report start date
* `End` - _optional_ - Report end date
* `DateValue` - _optional_ - Days spanned by report
    Possible values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days.
* `Limit` - _optional_ - Number of records returned from top of response.

### Visits by IP.

> No required parameters, DateValue defaults to Today.

*Tags:* `Analytics`

#### Input Parameters
* `ReportTag` - _optional_ - Report Tag filter.
* `Start` - _optional_ - Report start date
* `End` - _optional_ - Report end date
* `DateValue` - _optional_ - Days spanned by report
    Possible values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days.
* `Limit` - _optional_ - Number of records returned from top of response

### View count by Frequency.

> No required parameters, DateValue defaults to Today.

*Tags:* `Analytics`

#### Input Parameters
* `ReportTag` - _optional_ - Report Tag filter.
* `Start` - _optional_ - Report start date
* `End` - _optional_ - Report end date
* `DateValue` - _optional_ - Days spanned by report
    Possible values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days.
* `Limit` - _optional_ - Number of records returned from top of response

### GB Usage.

> Requires a valid Customer ID.

*Tags:* `Analytics`

#### Input Parameters
* `ReportTag` - _optional_ - Report Tag filter.
* `Month` - _optional_ - Report month
    Possible values: January, February, March, April, May, June, July, August, September, October, November, December.
* `Year` - _optional_ - Report year

### Most Active Visitors by IP.

> No required parameters, DateValue defaults to Today.

*Tags:* `Analytics`

#### Input Parameters
* `ReportTag` - _optional_ - Report Tag filter.
* `DateValue` - _optional_ - Days spanned by report
    Possible values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days.
* `Limit` - _optional_ - Number of records returned from top of response

### Viewers by Platform Hardware.

> No required parameters, DateValue defaults to Today.

*Tags:* `Analytics`

#### Input Parameters
* `ReportTag` - _optional_ - Report Tag filter.
* `Start` - _optional_ - Report start date
* `End` - _optional_ - Report end date
* `DateValue` - _optional_ - Days spanned by report
    Possible values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days.
* `Limit` - _optional_ - Number of records returned from top of response

### Viewers by Platform OS.

> No required parameters, DateValue defaults to Today.

*Tags:* `Analytics`

#### Input Parameters
* `ReportTag` - _optional_ - Report Tag filter.
* `Start` - _optional_ - Report start date
* `End` - _optional_ - Report end date
* `DateValue` - _optional_ - Days spanned by report
    Possible values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days.
* `Limit` - _optional_ - Number of records returned from top of response

### Most Recent Visitors by Time.

> No required parameters, DateValue defaults to Today.

*Tags:* `Analytics`

#### Input Parameters
* `ReportTag` - _optional_ - Report Tag filter.
* `Limit` - _optional_ - Number of records returned from top of response

### Summary of views, viewers, etc.

> Requires a valid Customer ID.

*Tags:* `Analytics`

#### Input Parameters
* `ReportTag` - _optional_ - Report Tag filter.
* `DateValue` - _optional_ - Days spanned by report
    Possible values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days.

### Title Report by Video ID.

> Requires a valid published ID.

*Tags:* `Analytics`

#### Input Parameters
* `PublishedId` - _required_ - Title published ID.
* `Start` - _optional_ - Report start date
* `End` - _optional_ - Report end date

### Views by Video.

> No required parameters, DateValue defaults to Today.

*Tags:* `Analytics`

#### Input Parameters
* `ReportTag` - _optional_ - Report Tag filter.
* `Start` - _optional_ - Report start date
* `End` - _optional_ - Report end date
* `DateValue` - _optional_ - Days spanned by report
    Possible values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days.
* `Limit` - _optional_ - Number of records returned from top of response

### Viewers by Day.

> Optional DateValue for length of report.

*Tags:* `Analytics`

#### Input Parameters
* `ReportTag` - _optional_ - Report Tag filter.
* `DateValue` - _optional_ - Days spanned by report
    Possible values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days.

### Views by Day.

> Optional DateValue for length of report.

*Tags:* `Analytics`

#### Input Parameters
* `ReportTag` - _optional_ - Report Tag filter.
* `DateValue` - _optional_ - Days spanned by report
    Possible values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days.

### Viewers by Web Browser.

> No required parameters, DateValue defaults to Today.

*Tags:* `Analytics`

#### Input Parameters
* `ReportTag` - _optional_ - Report Tag filter.
* `Start` - _optional_ - Report start date
* `End` - _optional_ - Report end date
* `DateValue` - _optional_ - Days spanned by report
    Possible values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days.
* `Limit` - _optional_ - Number of records returned from top of response

### Find Celebrity by Name ordered by rank.

> Find celebrity using name ordered by rank.

*Tags:* `Celebrity`

#### Input Parameters
* `StartsWith` - _optional_

### Search celebrities.

> Search celebrity meta data and images.  Each image in our database is related to a specific movie, TV or game title and is promotional of that title.  If you have title pages or articles about that title, then offering an image gallery on that page is obviously promotional.  If you are doing editorial about another topic and use an image from IVA, you need to reference or otherwise indicate the title of the film, TV show or game so as to be promotional.

*Tags:* `Celebrity`

#### Input Parameters
* `Package` - _optional_
* `Ids` - _optional_ - Search person using one or more Ids.  Ex:  Person/123
* `Skip` - _optional_ - Rows to skip, used for paging. Default is 0.
* `Take` - _optional_ - Rows to return, used for paging. Default is 10, limit is 50.
* `Includes` - _optional_ - Include sub objects from the person
* `Name` - _optional_ - Filter results based on Name.
* `FaceDetails_Age` - _optional_ - People with images with estimated age.
* `FaceDetails_Beard` - _optional_ - People images with a beard.
* `FaceDetails_Mustache` - _optional_ - People images with a mustache.
* `FaceDetails_Emotions` - _optional_ - Filter People images by emotions.
* `FaceDetails_Eyeglasses` - _optional_ - People images wearing eyeglasses.
* `FaceDetails_Sunglasses` - _optional_ - People images wearing sunglasses.
* `FaceDetails_EyesOpen` - _optional_ - People images with eyes open.
* `FaceDetails_MouthOpen` - _optional_ - People images with mouth open.
* `FaceDetails_Gender` - _optional_ - People images based on gender.
    Possible values: UNKNOWN, Male, Female.
* `FaceDetails_Smile` - _optional_ - People images with smile.
* `MinImageHeight` - _optional_ - People with images greater than or equal to image height.
* `MinImageWidth` - _optional_ - People with images greater than or equal to image width.
* `ImageType` - _optional_ - People with images of type.
    Possible values: UNKNOWN, Poster, Photo, Portrait.
* `ImageViolence` - _optional_ - People with image violence scores.
* `ImageSexuality` - _optional_ - People with image sexuality scores.
* `ImageTags` - _optional_ - People with image containing tags.
* `OfficialImage` - _optional_ - Limit People with official images.
* `ImageEntertainmentIds` - _optional_ - People with images from EntertainmentIds.  Ex: Movie/1234
* `BirthName` - _optional_ - Filter by birth name.
* `Gender` - _optional_ - Filter people by gender. (m or f)
    Possible values: m, f.
* `BirthDate` - _optional_ - Birth Date
* `BirthYear` - _optional_ - Birth Year
* `BirthDayOfMonth` - _optional_ - Birth Day of Month
* `BirthMonthOfYear` - _optional_ - Birth Month of Year
* `DeathDayOfMonth` - _optional_ - Birth Day of Month
* `DeathMonthOfYear` - _optional_ - Birth Month of Year
* `ExternalId` - _optional_ - Filter results matching external Id
* `ExternalIdType` - _optional_ - Filter results matching external Id
    Possible values: IVA, TMDB, IMDB, Facebook, Instagram, Twitter, Freebase_MID, Freebase_ID, TvRage.
* `ModifiedRecordsSince` - _optional_ - Filter results based on timestamp.  Returns >= value timestamp (UTC) provided.
* `SortByTimeStamp` - _optional_ - Sort results based on last modified descending.  Default is sorted by _score
* `IncludeDeleted` - _optional_ - Include Soft Deleted Records. Default (false)

### Search celebrities.

> Search celebrity meta data and images.  Each image in our database is related to a specific movie, TV or game title and is promotional of that title.  If you have title pages or articles about that title, then offering an image gallery on that page is obviously promotional.  If you are doing editorial about another topic and use an image from IVA, you need to reference or otherwise indicate the title of the film, TV show or game so as to be promotional.

*Tags:* `Celebrity`

#### Input Parameters
* `Accept` - _required_ - Accept Header
    Possible values: application/json.

### Returns list of unique EpisodeId changes greater than or equal to date (UTC)

> For each updated episode ID, pull the full episode data for that ID and update.

*Tags:* `Changes`

#### Input Parameters
* `Date` - _required_ - Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
* `Skip` - _required_ - Offset for paging. Default is 0.
* `Take` - _required_ - Maximum number of rows returned. Default is 1,000.

### Returns list of unique EpisodeId and Entity changes greater than or equal to date (UTC).

> Lists each episode ID that has changed as well as the entity in the object that changed.

*Tags:* `Changes`

#### Input Parameters
* `Date` - _required_ - Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
* `Skip` - _required_ - Offset for paging. Default is 0.
* `Take` - _required_ - Maximum number of rows returned. Default is 1,000.

### Returns list of unique GameId changes greater than or equal to date (UTC).

> Requires a valid Date.

*Tags:* `Changes`

#### Input Parameters
* `Date` - _required_ - Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
* `Skip` - _required_ - Offset for paging. Default is 0.
* `Take` - _required_ - Maximum number of rows returned. Default is 1,000.

### Returns list of unique MovieId changes greater than or equal to date (UTC).

> Use to get the ID's of the movies that have been added or changed and use /Movies/{ID} to get back the object with the updated data and replace in your database.

*Tags:* `Changes`

#### Input Parameters
* `Date` - _required_ - Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
* `Skip` - _required_ - Offset for paging. Default is 0.
* `Take` - _required_ - Maximum number of rows returned. Default is 1,000.

### Returns list of unique MovieId and Entity changes greater than or equal to date (UTC).

> Same as /Changes/Movies/History but with the specific entities that have changed inside the MovieResponse.

*Tags:* `Changes`

#### Input Parameters
* `Date` - _required_ - Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
* `Skip` - _required_ - Offset for paging. Default is 0.
* `Take` - _required_ - Maximum number of rows returned. Default is 1,000.

### Returns list of unique PersonId changes greater than or equal to date (UTC).

> Requires a valid Date.

*Tags:* `Changes`

#### Input Parameters
* `Date` - _required_ - Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
* `Skip` - _required_ - Offset for paging. Default is 0.
* `Take` - _required_ - Maximum number of rows returned. Default is 1,000.

### Returns list of unique PersonId and Entity changes greater than or equal to date (UTC).

> Requires a valid Date.

*Tags:* `Changes`

#### Input Parameters
* `Date` - _required_ - Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
* `Skip` - _required_ - Offset for paging. Default is 0.
* `Take` - _required_ - Maximum number of rows returned. Default is 1,000.

### Returns list of unique SeasonId changes greater than or equal to date (UTC).

> Use if you want to check for specific updates to season records.

*Tags:* `Changes`

#### Input Parameters
* `Date` - _required_ - Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
* `Skip` - _required_ - Offset for paging. Default is 0.
* `Take` - _required_ - Maximum number of rows returned. Default is 1,000.

### Returns list of unique SeasonId and Entity changes greater than or equal to date (UTC).

> Returns list of new or changed SeasonIds with the entity that has changed.

*Tags:* `Changes`

#### Input Parameters
* `Date` - _required_ - Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
* `Skip` - _required_ - Offset for paging. Default is 0.
* `Take` - _required_ - Maximum number of rows returned. Default is 1,000.

### Returns list of unique ShowId changes greater than or equal to date (UTC).

> All new and updated shows from requested date and time.  When a record gets updated, use the ID to get the full show object and replace the data in your cache.

*Tags:* `Changes`

#### Input Parameters
* `Date` - _required_ - Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
* `Skip` - _required_ - Offset for paging. Default is 0.
* `Take` - _required_ - Maximum number of rows returned. Default is 1,000.

### Returns list of unique ShowId and Entity changes greater than or equal to date (UTC).

> Returns a list of ShowId and entity of any show that has been updated.

*Tags:* `Changes`

#### Input Parameters
* `Date` - _required_ - Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
* `Skip` - _required_ - Offset for paging. Default is 0.
* `Take` - _required_ - Maximum number of rows returned. Default is 1,000.

### List of Movies (Weekend box office revenue).

> Returns top 10 box office movies.

*Tags:* `Charts`

#### Input Parameters
* `Skip` - _required_ - Determines where to start page.  Ex: 0 starts at the beginning.
* `Take` - _required_ - Determines the page size.  (Maximum of 100)

### List of Movies (Most Anticipated).

> Requires Skip and Take. Maximum page size is 100.

*Tags:* `Charts`

#### Input Parameters
* `Skip` - _required_ - Determines where to start page.  Ex: 0 starts at the beginning.
* `Take` - _required_ - Determines the page size.  (Maximum of 100)

### List of Movies based on popularity.

> Requires Skip and Take. Maximum page size is 100.

*Tags:* `Charts`

#### Input Parameters
* `Skip` - _required_ - Determines where to start page.  Ex: 0 starts at the beginning.
* `Take` - _required_ - Determines the page size.  (Maximum of 100)

### List of Celebrities based on popularity.

> Requires Skip and Take. Maximum page size is 100.

*Tags:* `Charts`

#### Input Parameters
* `Skip` - _required_ - Determines where to start page.  Ex: 0 starts at the beginning.
* `Take` - _required_ - Determines the page size.  (Maximum of 100)

### List of Shows based on popularity.

> Requires Skip and Take. Maximum page size is 100.

*Tags:* `Charts`

#### Input Parameters
* `Take` - _optional_ - Limits the total items returned. Maximum of 100 per request.
* `Skip` - _optional_ - Skips records using for paging results.

### List of Companies (with paging).

> Companies are listed in a movie, show, or game response as those whom are involved with the program.  EX: Universal Pictures.

*Tags:* `Common`

#### Input Parameters
* `Skip` - _required_ - Offset for paging. Default is 0.
* `Take` - _required_ - Maximum number of rows returned. Default is 1,000.

### List of Countries.

> List of Countries, ISO codes and Country IDs used throughout the API.

*Tags:* `Common`

#### Input Parameters
* `Accept` - _required_ - Accept Header
    Possible values: application/json.

### List of Common Enumerators.

> Provider enumerator has values added regularly.  Update your SDK to refresh these values.

*Tags:* `Common`

#### Input Parameters
* `Accept` - _required_ - Accept Header
    Possible values: application/json.

### List of Image Types.

> A list of image types available in the IVA database. **EX: Poster**

*Tags:* `Common`

#### Input Parameters
* `Accept` - _required_ - Accept Header
    Possible values: application/json.

### List of Languages.

> Returns a list of languages used in the API as well as the ISO code and language ID.

*Tags:* `Common`

#### Input Parameters
* `Accept` - _required_ - Accept Header
    Possible values: application/json.

### List of Originating Networks.

> No parameters.

*Tags:* `Common`

#### Input Parameters
* `Accept` - _required_ - Accept Header
    Possible values: application/json.

### List of Tags (with paging

> Paged list of all tags used in the API.

*Tags:* `Common`

#### Input Parameters
* `Skip` - _required_ - Offset for paging. Default is 0.
* `Take` - _required_ - Maximum number of rows returned. Default is 1,000.

### List of Video Types.

> Returns a list of the types of videos that can be associated to a title.

*Tags:* `Common`

#### Input Parameters
* `Accept` - _required_ - Accept Header
    Possible values: application/json.

### Match a program using Title, Year, Cast, Director.

> Requires a valid program type and at least a title. Matches to Entertainment Programs of given type, returns all candidates that achieved the highest score, ties possible.

*Tags:* `Entertainment`

#### Input Parameters
* `ProgramType` - _required_ - Type of Program to be matched.
* `Title` - _required_ - Title of Program to be matched.
* `AlternateTitles` - _optional_ - Alternate Titles of Program to be matched.
* `Year` - _optional_ - Release Year of Program to be matched.
* `Cast` - _optional_ - Cast members of Program to be matched.
* `Producers` - _optional_ - Producers of Program to be matched.
* `Directors` - _optional_ - Directors of Program to be matched.
* `Description` - _optional_ - Description of Program to be matched.
* `Poster` - _optional_ - Poster of Program to be matched.
* `ReleaseDate` - _optional_ - Release Date of Program to be matched.
* `StringDistance` - _optional_ - For fuzzy title match, default is 4, set to 0 for no fuzzy match.

### Match a program using Title, Year, Cast, Director.

> Requires a valid program type and at least a title. Matches to Entertainment Programs of given type, returns all candidates that achieved the highest score, ties possible.

*Tags:* `Entertainment`

#### Input Parameters
* `Accept` - _required_ - Accept Header
    Possible values: application/json.

### Search all entertainment programs.

> Search movies, shows, seasons, episodes, and games.  Each image in our database is related to a specific movie, TV or game title and is promotional of that title.  If you have title pages or articles about that title, then offering an image gallery on that page is obviously promotional.  If you are doing editorial about another topic and use an image from IVA, you need to reference or otherwise indicate the title of the film, TV show or game so as to be promotional.

*Tags:* `Entertainment`

#### Input Parameters
* `Ids` - _optional_ - Search by one or more Ids.  Ex: Movie/123.
* `Skip` - _optional_ - Rows to skip, used for paging. Default is 0.
* `Take` - _optional_ - Rows to return, used for paging. Default is 10, limit is 50.
* `Providers` - _optional_ - List of availability providers.  See /Common/GetCommonEnumerators endpoint for complete list.
* `DeliveryMethods` - _optional_ - List of availability delivery methods. See /Common/GetCommonEnumerators endpoint for complete list.
* `OfferTypes` - _optional_ - List of availability offer types. See /Common/GetCommonEnumerators endpoint for complete list.
* `VideoQualities` - _optional_ - List of availability video qualities. See /Common/GetCommonEnumerators endpoint for complete list.
* `ProgramTypes` - _optional_ - List of program types. See /Common/GetCommonEnumerators endpoint for complete list.
* `AvailabilityCountries` - _optional_ - List of 2 character country codes.
* `Genres` - _optional_ - List of genres (movie and show).
* `Tags` - _optional_ - List of tags (movie and show).
* `Certifications` - _optional_ - List of certifications for movie and show.
* `PersonNames` - _optional_ - List of names. Maximum of 3.
* `PeopleIds` - _optional_ - Person Ids.  Currently supports one person.
* `Jobs` - _optional_ - List of Jobs a contributor can have.
* `ReleaseTypes` - _optional_ - List of release types for both movie and show.
* `ReleaseCountries` - _optional_ - List of 2 character country codes when filtering on releases.
* `YearRange_Start` - _optional_ - Filter results based on start and end original release year.
* `YearRange_End` - _optional_ - Filter results based on start and end original release year.
* `ReleaseDateRange_Start` - _optional_ - Filter results based on any release date range.
* `ReleaseDateRange_End` - _optional_ - Filter results based on any release date range.
* `OriginalReleaseDateRange_Start` - _optional_ - Filter results based on original release date range.
* `OriginalReleaseDateRange_End` - _optional_ - Filter results based on original release date range.
* `Package` - _optional_
* `Title` - _optional_ - Title search.
* `ShowId` - _optional_ - Filter results to match a show.  Use for locating seasons and episodes for a show.
* `SeasonId` - _optional_ - Filter results to match a season.  Use for locating episodes for a season.
* `Includes` - _optional_ - Include sub objects from the program
* `Culture` - _optional_ - Specify the country and language
    Possible values: NOT_SET, English_US, English_CA, English_UK, English_AU.
* `ExternalId` - _optional_ - Filter results matching external Id
* `ExternalIdType` - _optional_ - Filter results matching external Id
* `HasVideo` - _optional_ - Filter results based on having video content
* `VideoId` - _optional_ - Filter results based on matching a single Video ID.
* `VideoTargetCountries` - _optional_ - List of 2 character country codes when filtering on video target countries.
* `VideoTargetLanguages` - _optional_ - Specify video target languages. This takes into consideration both language spoken and language subtitled.
* `SortByTimeStamp` - _optional_ - Sort results based on last modified descending.  Default is sorted by _score. DEPRECIATED! Use SortBy instead.
* `SortBy` - _optional_ - SortBy
    Possible values: NOT_SET, Relevance, TimeStamp, IvaRating, ReleaseDate, AverageTrendRank, TrendRank.
* `ModifiedRecordsSince` - _optional_ - Filter results based on timestamp.  Returns >= value timestamp (UTC) provided.
* `OriginatingNetworks` - _optional_ - The Network the current first run shows appear on. Ex: ABC, NBC, Netflix, etc.  
* `Status` - _optional_ - The status of the movie or show.  Ex: Returning_Series, in_production, etc.  
* `Revenue` - _optional_ - Filter results where movie revenue is greater than or equal to this value.
* `Budget` - _optional_ - Filter results where movie budget is greater than or equal to this value.
* `Minimum_IvaRating` - _optional_ - Filter results with a minimum Rating greater than or equal to this value. (0 to 100)
* `Minimum_EncodeDate` - _optional_ - Filter results based on encode date.
* `IncludeDeleted` - _optional_ - Include Soft Deleted Records. Default (false)
* `TrendSourceIds` - _optional_ - Program Trend Source Ids.  Ex: 2,3.
* `TrendBrands` - _optional_ - Program Trend Brands.  Ex: IMDB,IVA
* `TrendCountries` - _optional_ - Program Trend Countries.  Ex: US,CA.
* `TrendListClassifiers` - _optional_ - Program Trend List Classifiers.  Ex: AVOD,SVOD.

### Search all entertainment programs.

> Search movies, shows, seasons, episodes, and games.  Each image in our database is related to a specific movie, TV or game title and is promotional of that title.  If you have title pages or articles about that title, then offering an image gallery on that page is obviously promotional.  If you are doing editorial about another topic and use an image from IVA, you need to reference or otherwise indicate the title of the film, TV show or game so as to be promotional.

*Tags:* `Entertainment`

#### Input Parameters
* `Accept` - _required_ - Accept Header
    Possible values: application/json.

### Returns list of all MovieId, Gracenote Id pairs.

> Not accessible with a Demo account.  **Special permissions needed** for access to this operation.  Contact [Sales](mailto:sales@internetvideoarchive.com).

*Tags:* `ExternalIds`

#### Input Parameters
* `Skip` - _required_ - Determines where to start page.  Ex: 0 starts at the beginning.
* `Take` - _required_ - Determines the page size.  (Maximum of 1000)

### Returns list of all ShowId, Gracenote Id pairs.

> Not accessible with a Demo account. **Special permissions needed** for access to this operation. Contact [Sales](mailto:sales@internetvideoarchive.com).

*Tags:* `ExternalIds`

#### Input Parameters
* `Skip` - _required_ - Determines where to start page.  Ex: 0 starts at the beginning.
* `Take` - _required_ - Determines the page size.  (Maximum of 1000)

### Returns list of all MovieId, IMDB Id pairs.

> Ingest this ID map to create connections between the objects in your existing database with an IMDB ID to the IVA Movie objects.

*Tags:* `ExternalIds`

#### Input Parameters
* `Skip` - _required_ - Determines where to start page.  Ex: 0 starts at the beginning.
* `Take` - _required_ - Determines the page size.  (Maximum of 1000)

### Returns list of all MovieId, Tmdb Id pairs.

> ngest this ID map to create connections between the objects in your existing database with an IMDB ID to the IVA Show objects.

*Tags:* `ExternalIds`

#### Input Parameters
* `Skip` - _required_ - Determines where to start page.  Ex: 0 starts at the beginning.
* `Take` - _required_ - Determines the page size.  (Maximum of 1000)

### Returns list of all MovieId, Tivo Id pairs.

> Not accessible with a Demo account. **Special permissions needed** for access to this operation. Contact [Sales](mailto:sales@internetvideoarchive.com).

*Tags:* `ExternalIds`

#### Input Parameters
* `Skip` - _required_ - Determines where to start page.  Ex: 0 starts at the beginning.
* `Take` - _required_ - Determines the page size.  (Maximum of 1000)

### Returns list of all ShowId, Tivo Id pairs.

> Not accessible with a Demo account. **Special permissions needed** for access to this operation. Contact [Sales](mailto:sales@internetvideoarchive.com).

*Tags:* `ExternalIds`

#### Input Parameters
* `Skip` - _required_ - Determines where to start page.  Ex: 0 starts at the beginning.
* `Take` - _required_ - Determines the page size.  (Maximum of 1000)

### Returns list of all MovieId, Tmdb Id pairs.

> Use to link a TMDB ID to an IVA Movie ID.

*Tags:* `ExternalIds`

#### Input Parameters
* `Skip` - _required_ - Determines where to start page.  Ex: 0 starts at the beginning.
* `Take` - _required_ - Determines the page size.  (Maximum of 1000)

### Returns list of all ShowId, TMDB Id pairs.

> Use to link a TMDB ID to an IVA Show ID.

*Tags:* `ExternalIds`

#### Input Parameters
* `Skip` - _required_ - Determines where to start page.  Ex: 0 starts at the beginning.
* `Take` - _required_ - Determines the page size.  (Maximum of 1000)

### Returns list of all MovieId, Webedia Id pairs.

> Not accessible with a Demo account. **Special permissions needed** for access to this operation. Contact [Sales](mailto:sales@internetvideoarchive.com).

*Tags:* `ExternalIds`

#### Input Parameters
* `Skip` - _required_ - Determines where to start page.  Ex: 0 starts at the beginning.
* `Take` - _required_ - Determines the page size.  (Maximum of 1000)

### Gets geo-location data for a postal code.

*Tags:* `Fandango`

#### Input Parameters
* `postalcode` - _required_
* `country` - _required_

### Gets geo-location data for a city.

*Tags:* `Fandango`

#### Input Parameters
* `country` - _required_
* `city` - _required_
* `state` - _required_

### Search for movies available.

*Tags:* `Fandango`

#### Input Parameters
* `Type` - _required_ - Specify InTheaters or ComingSoon.
    Possible values: InTheaters, ComingSoon.
* `Latitude` - _optional_ - Latitude of the user's location.
* `Longitude` - _optional_ - Longitude of the user's location.
* `ZipCode` - _optional_ - Zip code of the user's location.
* `Radius` - _optional_ - Search radius in miles around the user's location.
* `Limit` - _optional_ - Number of items to return. Used in pagination.
* `Offset` - _optional_ - Offset index of the first item to return. Used in pagination..

### Gets a movie.

*Tags:* `Fandango`

#### Input Parameters
* `MovieId` - _required_ - The ID of the movie.
* `IdProvider` - _required_ - The provider for the movie ID.
    Possible values: fandangoApi, fandango, IVA.

### Gets display dates for a movie based on geolocation.

*Tags:* `Fandango`

#### Input Parameters
* `MovieId` - _required_ - The ID of the movie.
* `IdProvider` - _required_ - The provider for the movie ID.
    Possible values: fandangoApi, fandango, IVA.
* `Latitude` - _optional_ - Latitude of the user's location.
* `Longitude` - _optional_ - Longitude of the user's location.
* `ZipCode` - _optional_ - Zip code of the user's location.
* `Radius` - _optional_ - Search radius in miles around the user's location.
* `StartDateTime` - _optional_ - Start datetime (ISO-8601) for the display date range. Defaults to UTC now.
* `EndDateTime` - _optional_ - End datetime (ISO-8601) for the display date range. Defaults to no end datetime.
* `ExcludeTheaterIds` - _optional_ - Comma delimited list of theaters to exclude.
* `TheaterChainCodes` - _optional_ - Comma delimited list of theater chains to filter.

### Gets movie showtimes grouped by date, theater, format, and amenities.

*Tags:* `Fandango`

#### Input Parameters
* `MovieId` - _required_ - The ID of the movie.
* `IdProvider` - _required_ - The provider for the movie ID.
    Possible values: fandangoApi, fandango, IVA.
* `Longitude` - _optional_ - Longitude of the user's location.
* `Latitude` - _optional_ - Latitude of the user's location.
* `ZipCode` - _optional_ - Zip code of the user's location.
* `Radius` - _optional_ - Search radius in miles around the user's location.
* `StartDisplayDate` - _optional_ - Start date for the display date range. Defaults to UTC now.
* `EndDisplayDate` - _optional_ - End display date. Defaults to start display date.

### Gets showtimes by geolocation/theater and date.

*Tags:* `Fandango`

#### Input Parameters
* `TheaterId` - _optional_ - The ID of the theater (required if latitude/longitude or zipCode not provided).
* `TheaterIdProvider` - _optional_ - The provider for the theater ID.
    Possible values: fandangoApi, tms.
* `Longitude` - _optional_ - Longitude of the user's location.
* `Latitude` - _optional_ - Latitude of the user's location.
* `ZipCode` - _optional_ - Zip code of the user's location.
* `Radius` - _optional_ - Search radius in miles around the user's location.
* `StartDateTime` - _optional_ - Start datetime (ISO-8601) for the display date range. Defaults to UTC now.
* `EndDateTime` - _optional_ - End datetime (ISO-8601) for the display date range. Defaults to no end datetime.
* `StartDisplayDate` - _optional_ - Start date for the display date range. Defaults to UTC now.
* `EndDisplayDate` - _optional_ - End display date. Defaults to start display date.
* `MovieTitle` - _optional_ - Filter showtimes by movie title.
* `TheaterName` - _optional_ - Filter showtimes by theater name.
* `MovieId` - _optional_ - Filter showtimes by movie ID.
* `MovieIdProvider` - _optional_ - The provider for the movie ID.
    Possible values: fandangoApi, fandango, IVA.
* `AmenityIds` - _optional_ - Filter showtimes by amenity list (comma delimited). Only entries with amenities exactly matching this list are returned.
* `AmenityIdProvider` - _optional_ - The provider for the amenity ID.
    Possible values: fandangoApi, fandango.
* `Limit` - _optional_ - Number of items to return. Used in pagination.
* `Offset` - _optional_ - Offset index of the first item to return. Used in pagination.

### Get showtime details by showtime id.

*Tags:* `Fandango`

#### Input Parameters
* `ShowtimeId` - _required_ - Showtime ID for request.
* `IdProvider` - _required_ - The provider for the showtime ID.
    Possible values: fandangoApi, fandango.

### Gets theaters close to a geolocation.

*Tags:* `Fandango`

#### Input Parameters
* `Longitude` - _optional_ - Longitude of the user's location.
* `Latitude` - _optional_ - Latitude of the user's location.
* `ZipCode` - _optional_ - Zip code of the user's location.
* `Radius` - _optional_ - Search radius in miles around the user's location.
* `Limit` - _optional_ - Number of items to return. Used in pagination.
* `Offset` - _optional_ - Offset index of the first item to return. Used in pagination.

### Gets a theater.

*Tags:* `Fandango`

#### Input Parameters
* `TheaterId` - _required_ - Id of theater.
* `IdProvider` - _required_ - The provider for the theater ID.
    Possible values: fandangoApi, tms.

### Gets display dates for a theater.

*Tags:* `Fandango`

#### Input Parameters
* `TheaterId` - _required_ - Id of theater.
* `IdProvider` - _required_ - The provider for the theater ID.
    Possible values: fandangoApi, tms.
* `StartDateTime` - _optional_ - Start datetime (ISO-8601) for the display date range. Defaults to UTC now.
* `EndDateTime` - _optional_ - End datetime (ISO-8601) for the display date range. Defaults to no end datetime.

### Gets theater showtimes grouped by date, movie, format, and amenities.

*Tags:* `Fandango`

#### Input Parameters
* `TheaterId` - _required_ - Offset index of the first item to return. Used in pagination.
* `IdProvider` - _required_ - The provider for the theater ID.
    Possible values: fandangoApi, tms.
* `StartDisplayDate` - _optional_ - Start date for the display date range. Defaults to UTC now.
* `EndDisplayDate` - _optional_ - End display date. Defaults to start display date.

### Find a movie using third party ID.

> Use FindMovie with a third party ID like IMDB, TMDB, Gracenote, Tivo, etc. to find the corresponding movie in the IVA database.  For a full list of supported ID types see /Movies/AlternateIdTypes. <br/>
> <br/>
> <br/>
> <br/>
> `Recommendation: Use with small data sets or for a proof of concept. `

*Tags:* `Find`

#### Input Parameters
* `IdType` - _required_ - Required third party ID type of MovieAlternateId.
* `Id` - _required_ - Required third party ID of Movie.
* `Includes` - _optional_ - List of additional objects to include in the movie object.

### Find a TV show using a third party ID.

> Use FindShow with a third party ID like IMDB, TMDB, Gracenote, Tivo, etc. to find the corresponding TV show in the IVA database. For a full list of supported ID types see /Shows/AlternateIdTypes. `Recommendation: Use with small data sets or for a proof of concept. `

*Tags:* `Find`

#### Input Parameters
* `IdType` - _required_ - Required third party ID type of ShowAlternateId.
* `Id` - _required_ - Required third party ID of Show.
* `Includes` - _optional_ - List of additional objects to include in the show response.

### Gets all Games.

> Returns a AllGameResponse object containing a list of all games. By default the API will only return basic title information. Additional objects can be included by passing the object in the Includes parameter.

*Tags:* `Games`

#### Input Parameters
* `Take` - _required_ - Limits the total items returned. Maximum of 100 per request.
* `Skip` - _optional_ - Skips records using for paging results.
* `Includes` - _optional_ - List of additional objects to include in the game object.

### Find Game by Title ordered by year.

> Find game using title ordered by year.

*Tags:* `Games`

#### Input Parameters
* `StartsWith` - _optional_

### Get Game by Game ID.

> By default the API will only return basic title information. Additional objects can be included by passing the object in the Includes parameter.

*Tags:* `Games`

#### Input Parameters
* `Id` - _required_ - Required ID of Game.
* `Includes` - _optional_ - List of additional objects to include in the game response.

### Get GoWatchIt Episode Availability.

> Returns GoWatchit episode availability by Entertainment Episode ID. Special permission is required to access this endpoint.

*Tags:* `GoWatchIt`

#### Input Parameters
* `Id` - _required_ - Required ID of Entertainment Episode.
* `ApiKey` - _required_ - Required GoWatchIt API key.

### Get GoWatchIt Movie Availability.

> Returns GoWatchIt movie availability by Entertainment Movie ID.  Special permission is required to access this endpoint.  Contact [Sales](mailto:Sales@InternetVideoArchive.com) for more information.

*Tags:* `GoWatchIt`

#### Input Parameters
* `Id` - _required_ - Required ID of Entertainment Movie.
* `ApiKey` - _required_ - Required GoWatchIt API key.

### Get GoWatchIt Season Availability.

> Returns GoWatchIt season availability by Entertainment Season ID.  Special permission is required to access this endpoint.  Contact [Sales](mailto:Sales@InternetVideoArchive.com) for more information.

*Tags:* `GoWatchIt`

#### Input Parameters
* `Id` - _required_ - Required ID of Entertainment Season.
* `ApiKey` - _required_ - Required GoWatchIt API key.

### Get GoWatchItShow Availability.

> Returns GoWatchIt show availability by Entertainment Show ID.  Special permission is required to access this endpoint. Please contact [Sales](mailto:Sales@InternetVideoArchive.com) for more information.

*Tags:* `GoWatchIt`

#### Input Parameters
* `Id` - _required_ - Required ID of Entertainment Show.
* `ApiKey` - _required_ - Required GoWatchIt API key.

### List of Batch Image.

> Requires a list filepath.

*Tags:* `Images`

#### Input Parameters
* `FilePath` - _optional_ - List of Filepaths.

### List of Screen Capture Responses.

> Requires a list of filepaths.

*Tags:* `Images`

#### Input Parameters
* `FilePath` - _optional_ - List of Filepaths.

### Redirect to a Screen Capture.

> Requires a valid filepath of a video asset screen capture.  <br/>
> <br/>
> `Note: The swagger U/I does not support redirects.`

*Tags:* `Images`

#### Input Parameters
* `FilePath` - _required_ - Filepath of Image.
* `Redirect` - _optional_ - Redirect to the image. Default = true
* `ExpirationMinutes` - _optional_ - Image url expiration in minutes. Default = 60

### Redirect to an Image.

> Images should be downloaded and stored on the client server. Use /Common/ImageTypes to see a list of available image types.  <br/>
> <br/>
> <br/>
> `Note: The swagger U/I does not support redirects.`

*Tags:* `Images`

#### Input Parameters
* `FilePath` - _required_ - Filepath of Image.
* `Redirect` - _optional_ - Redirect to the image. Default = true
* `ExpirationMinutes` - _optional_ - Image url expiration in minutes. Default = 60

### Get Metacritic Movie information.

> Returns Metacritic Movie information by Entertainment Movie ID.

*Tags:* `Metacritic`

#### Input Parameters
* `Id` - _required_ - Required ID of Entertainment Movie.

### Get Metacritic TV information.

> Returns Metacritic TV information by Entertainment Show ID.

*Tags:* `Metacritic`

#### Input Parameters
* `Id` - _required_ - Required ID of Entertainment Show.
* `SeasonNumber` - _optional_ - Number of season.

### Returns a paged list of all movies.

> By default the API will only return basic title information. Additional objects can be included by passing the object in the Includes parameter.   <br/>
> <br/>
> <br/>
> `Subscriptions with "Limited" data will only be able to include basic title information and Videos.`

*Tags:* `Movies`

#### Input Parameters
* `Take` - _required_ - Limits the total items returned. Maximum of 100 per request.
* `Skip` - _optional_ - Skips records using for paging results.
* `Includes` - _optional_ - List of additional objects to include in the movie objectSearch movie by OriginalTitle.

### Returns all MovieAlternateIdTypes

> Movie alternate ID types refer to 3rd party IDs that IVA matches its own movie IDs.  **EX: IMDB, TMDB**.  <br/>
> <br/>
> `Use to get the Id of the ID type to use with /Find/Movie.`

*Tags:* `Movies`

#### Input Parameters
* `Accept` - _required_ - Accept Header
    Possible values: application/json.

### Returns list of all Movies coming to US Theaters.

> Requires Skip and Take. Maximum page size is 10.<br/>
> <br/>
> By default the API will only return basic title information.<br/>
> Additional objects can be included by passing the object in the Includes parameter in a comma separated list.

*Tags:* `Movies`

#### Input Parameters
* `Skip` - _required_ - Determines where to start page.  Ex: 0 starts at the beginning.
* `Take` - _required_ - Determines the page size.  (Maximum of 10)
* `Includes` - _optional_ - List of additional objects to include in the movie response.

### Returns list of all Movies currently in US Theaters.

> Requires Skip and Take. Maximum page size is 10.<br/>
> <br/>
> By default the API will only return basic title information.<br/>
> Additional objects can be included by passing the object in the Includes parameter in a comma separated list.

*Tags:* `Movies`

#### Input Parameters
* `Skip` - _required_ - Determines where to start page.  Ex: 0 starts at the beginning.
* `Take` - _required_ - Determines the page size.  (Maximum of 10)
* `Includes` - _optional_ - List of additional objects to include in the movie response.

### Perform a match to Entertainment using Title, Year, Cast and Director. Returns best match and score for the match.

> Use to match IVA movie data to another data source using title, year, cast etc.

*Tags:* `Movies`

#### Input Parameters
* `Title` - _required_ - Title of movie to be matched.
* `AlternateTitles` - _optional_ - Alternate Titles of movie to be matched.
* `Year` - _optional_ - Release Year of movie to be matched.
* `ReleaseDate` - _optional_ - Release Date of movie to be matched.
* `Cast` - _optional_ - Cast members of movie to be matched.
* `Directors` - _optional_ - Directors of movie to be matched.
* `Description` - _optional_ - Description of movie to be matched.
* `Poster` - _optional_ - Poster of movie to be matched.
* `StringDistance` - _optional_ - For fuzzy title match, default is 4, set to 0 for no fuzzy match.

### Perform a match to Entertainment using Title, Year, Cast and Director.  Returns best match and score for the match.

> Requires a valid MatchMovieCandidate, matches to Entertainment Movies

*Tags:* `Movies`

#### Input Parameters
* `Accept` - _required_ - Accept Header
    Possible values: application/json.

### List of Movie Certifications

> Returns all Movie Certifications used in a movie response with the Releases object.

*Tags:* `Movies`

#### Input Parameters
* `Accept` - _required_ - Accept Header
    Possible values: application/json.

### List of Movie Genres

> List of all movie genres used in the API.

*Tags:* `Movies`

#### Input Parameters
* `Accept` - _required_ - Accept Header
    Possible values: application/json.

### List of Movie Release Types

> Release type refers to the release. **EX: Theatrical, Home Video, etc.**

*Tags:* `Movies`

#### Input Parameters
* `Accept` - _required_ - Accept Header
    Possible values: application/json.

### Search and discover movies.

> Searchable Fields:<br/>
> Title, AlternateTitles, Genres, OriginalReleaseDate, UnitedStatesReleaseDate, GermanyReleaseDate, FranceReleaseDate, UnitedKingdomReleaseDate, ItalyReleaseDate, JapanReleaseDate, Tags, Cast, Directors, Descriptions, Ratings, OriginalLanguage.<br/>
> [Syntax Ref](https://docs.microsoft.com/en-us/rest/api/searchservice/simple-query-syntax-in-azure-search)<br/>
> <br/>
> Filterable Fields:<br/>
> ID, Title, AlternateTitles, Genres, OriginalReleaseDate, UnitedStatesReleaseDate, GermanyReleaseDate, FranceReleaseDate, UnitedKingdomReleaseDate, ItalyReleaseDate, JapanReleaseDate, Year, Tags, Cast, Directors, Descriptions, HasVideo, PosterFilePath, Ratings, OriginalLanguage, Runtime, Budget, Revenue, Created, Modified.<br/>
> [Syntax Ref](https://docs.microsoft.com/en-us/rest/api/searchservice/odata-expression-syntax-for-azure-search)

*Tags:* `Movies`

#### Input Parameters
* `term` - _optional_ - Term to search for. This can be combined with all other options. Use '*' to return any match.
* `SelectFields` - _optional_ - List of field names to be returned in the object.
* `SearchFields` - _optional_ - List of field names to search using 'term.'
* `Filter` - _optional_ - Expression to filter results.
* `OrderBy` - _optional_ - List of field names to sort results.  Default is relevance.
* `Top` - _optional_ - Limit results.  Maximum returned is 1000.
* `Skip` - _optional_ - Skip number of results. Use this for paging results.
* `IncludeTotalResultCount` - _optional_ - Includes total results in response. This will have a performance impact.
* `SearchMode` - _optional_ - Specifies whether ANY or ALL of the search terms must be matched in order to count the item as a match.

### Returns movie data for a specific IVA MovieId.

> By default the API will only return basic title information. Additional objects can be included by passing the object in the Includes parameter.   <br/>
> <br/>
> <br/>
> `Subscriptions with "Limited" data will only be able to include basic title information and Videos.`

*Tags:* `Movies`

#### Input Parameters
* `Id` - _required_ - Required ID of Movie.
* `Includes` - _optional_ - List of additional objects to include in the movie response.

### Create new Program.

*Tags:* `My`

#### Input Parameters
* `Accept` - _required_ - Accept Header
    Possible values: application/json.

### Update a Program.

*Tags:* `My`

#### Input Parameters
* `Accept` - _required_ - Accept Header
    Possible values: application/json.

### Returns all Programs.

> Get all Programs.

*Tags:* `My`

#### Input Parameters
* `Take` - _required_ - Limits the total items returned. Maximum of 100 per request.
* `Skip` - _optional_ - Skips records using for paging results.

### Get a Program by ID.

> Requires a valid Program ID.

*Tags:* `My`

#### Input Parameters
* `Id` - _required_ - Required ID of program.

### Create new Video.

*Tags:* `My`

#### Input Parameters
* `Accept` - _required_ - Accept Header
    Possible values: application/json.

### Update a Video.

*Tags:* `My`

#### Input Parameters
* `Accept` - _required_ - Accept Header
    Possible values: application/json.

### Returns all Videos.

> Get all Videos.

*Tags:* `My`

#### Input Parameters
* `Take` - _required_ - Limits the total items returned. Maximum of 100 per request.
* `Skip` - _optional_ - Skips records using for paging results.

### Get a Video by ID.

> Requires a valid Video ID.

*Tags:* `My`

#### Input Parameters
* `Id` - _required_ - Required ID of video.

### Gets all People.

> Returns a AllPeopleResponse object containing a list of all poeple.

*Tags:* `People`

#### Input Parameters
* `Take` - _required_ - Limits the total items returned. Maximum of 100 per request.
* `Skip` - _optional_ - Skips records using for paging results.
* `Includes` - _optional_ - List of additional objects to include in the person response.

### Find Person by Name ordered by rank.

> Find person using name ordered by rank.

*Tags:* `People`

#### Input Parameters
* `StartsWith` - _optional_

### Returns information on a person.

> BETA - By default the API will only return basic People information. Additional objects can be included by passing the object in the Includes parameter.

*Tags:* `People`

#### Input Parameters
* `Id` - _required_ - Required ID of Person.
* `Includes` - _optional_ - List of additional objects to include in the person response.

### Get a Person's Filmography.

> Requires a valid Person ID.

*Tags:* `People`

#### Input Parameters
* `Id` - _required_

### Creates a caption order for given Video Ids.

> Requires at least one Video ID.

*Tags:* `Rev`

#### Input Parameters
* `Accept` - _required_ - Accept Header
    Possible values: application/json.

### List of Caption Orders.

> Orders are paged. Use Order ID to retrieve the caption attachment.

*Tags:* `Rev`

#### Input Parameters
* `Take` - _required_ - Limits the total items returned. Maximum of 100 per request.
* `Skip` - _optional_ - Skips records using for paging results.

### Caption text.

> Requires caption OrderId and Type of caption.

*Tags:* `Rev`

#### Input Parameters
* `Id` - _required_ - Caption Order Id.
* `Type` - _required_ - Type of caption content.
    Possible values: WebVTT, Ttml, SubRip, Scc, Mcc, QtText, Transcript, Dfxp, CheetaCap, Stl, AvidDs, FacebookSubRip, Unknown.

### Returns a zip file of client SDK.

> Generate and download SDK's for using the API.  Requires a subscription key for authorization and a valid client.

*Tags:* `SDKs`

#### Input Parameters
* `Client` - _required_ - Client SDK
    Possible values: akka_scala, android, async_scala, bash, clojure, cpprest, csharp, CsharpDotNet2, cwiki, dart, dynamic_html, elixir, flash, go, groovy, html, html2, java, javascript, javascript_closure_angular, jaxrs_cxf_client, jmeter, objc, perl, php, python, qt5cpp, ruby, scala, swagger, swagger_yaml, swift, swift3, tizen, typescript_angular, typescript_angular2, typescript_fetch, typescript_node.
* `RedirectToFile` - _required_ - Redirect to download the zipped SDK.

### Returns a paged list of all TV shows.

> By default the API will only return basic title information. Additional objects can be included by passing the object in the Includes parameter. <br/>
> <br/>
> <br/>
> `Subscriptions with "Limited" data will only be able to include basic title information, Videos, EpisodicVideos, and SeasonVideos.`

*Tags:* `Shows`

#### Input Parameters
* `Take` - _optional_ - Limits the total items returned. Maximum of 10 per request.
* `Skip` - _optional_ - Skips records using for paging results.
* `Includes` - _optional_ - List of additional objects to include in the show object.

### List of External Id Types

> Alternate Id types refer to the 3rd party ID sets IVA data has matched.  **Ex: IMDB**

*Tags:* `Shows`

#### Input Parameters
* `Accept` - _required_ - Accept Header
    Possible values: application/json.

### Perform a match to Entertainment using Title, Year, Cast and Director. Returns best match and score for the match.

> Use to match IVA show data to another data source using title, director, cast, etc.

*Tags:* `Shows`

#### Input Parameters
* `Title` - _required_ - Title of Show to be matched.
* `AlternateTitles` - _optional_ - Alternate Titles of Show to be matched.
* `Year` - _optional_ - Release Year of Show to be matched.
* `Cast` - _optional_ - Cast members of Show to be matched.
* `Producers` - _optional_ - Producers of Show to be matched.
* `Directors` - _optional_ - Directors of Show to be matched.
* `Description` - _optional_ - Description of Show to be matched.
* `Poster` - _optional_ - Poster of movie to be matched.
* `ReleaseDate` - _optional_ - Release Date of movie to be matched.
* `StringDistance` - _optional_ - For fuzzy title match, default is 4, set to 0 for no fuzzy match.

### Perform a match to Entertainment using Title, Year, Cast and Director.  Returns best match and score for the match.

> Requires a valid MatchShowCandidate, matches to Entertainment Shows

*Tags:* `Shows`

#### Input Parameters
* `Accept` - _required_ - Accept Header
    Possible values: application/json.

### List of Show Release Types

> Release types refer to the type of release and are used in the releases object for a show.

*Tags:* `Shows`

#### Input Parameters
* `Accept` - _required_ - Accept Header
    Possible values: application/json.

### Search and discover shows.

> Searchable Fields: Title, AlternateTitles, Genres, Tags, Cast, Directors, Descriptions, Ratings, OriginalLanguage. [Syntax Ref](https://docs.microsoft.com/en-us/rest/api/searchservice/simple-query-syntax-in-azure-search)<br/>
> <br/>
> Filterable Fields: Id, Title, AlternateTitles, Genres, OriginalAirDate, Year, Tags, Cast, Directors, Descriptions, HasVideo, ImageFilePath, Ratings, OriginalLanguage, Created, Modified, NumberOfSeasons, NumberOfEpisodes. [Syntax Ref](https://docs.microsoft.com/en-us/rest/api/searchservice/simple-query-syntax-in-azure-search)

*Tags:* `Shows`

#### Input Parameters
* `term` - _optional_ - Term to search for. This can be combined with all other options. Use '*' to return any match.
* `SelectFields` - _optional_ - List of field names to be returned in the object.
* `SearchFields` - _optional_ - List of field names to search using 'term.'
* `Filter` - _optional_ - Expression to filter results.
* `OrderBy` - _optional_ - List of field names to sort results.  Default is relevance.
* `Top` - _optional_ - Limit results.  Maximum returned is 1000.
* `Skip` - _optional_ - Skip number of results. Use this for paging results.
* `IncludeTotalResultCount` - _optional_ - Includes total results in response. This will have a performance impact.
* `SearchMode` - _optional_ - Specifies whether ANY or ALL of the search terms must be matched in order to count the item as a match.

### Get Season by ShowId and Season Number.

> Use the IVA ShowId and a season number to get a season details and video asset data.

*Tags:* `Shows`

#### Input Parameters
* `Id` - _required_ - Id of a Show.
* `SeasonNumber` - _required_ - Number of a Season belonging to a Show.

### Get Episode by ShowId, Season Number and Episode Number.

> Some use cases find it useful to be able to pass a season number and episode number of a known show to get the data for that exact episode.

*Tags:* `Shows`

#### Input Parameters
* `Id` - _required_ - Required Id of the Show.
* `SeasonNumber` - _required_ - Required SeasonNumber.
* `EpisodeNumber` - _required_ - Required EpisodeNumber.

### Returns an Episode object for a requested Episode ID.

> Returns the episode details for a specific episode ID.

*Tags:* `Shows`

#### Input Parameters
* `Id` - _required_ - Required ID of an Episode.
* `Includes` - _optional_ - List of additional objects to include in the episode response.

### Get Season by SeasonId.

> Use with a SeasonId to return details for a season including any video asset data.

*Tags:* `Shows`

#### Input Parameters
* `Id` - _required_ - Id of a Season.
* `Includes` - _optional_ - List of additional objects to include in the season response.

### List of Show Certifications

> List of Show Certifications and definitions.

*Tags:* `Shows`

#### Input Parameters
* `Accept` - _required_ - Accept Header
    Possible values: application/json.

### List of Show Genres

> Returns a list of all the show genres used in the IVA database.

*Tags:* `Shows`

#### Input Parameters
* `Accept` - _required_ - Accept Header
    Possible values: application/json.

### Get Show by Show ID.

> By default the API will only return basic title information. Additional objects can be included by passing the object in the Includes parameter.  <br/>
> <br/>
> <br/>
> `Subscriptions with "Limited" data will only be able to include basic title information, Videos, EpisodicVideos, and SeasonVideos.`

*Tags:* `Shows`

#### Input Parameters
* `Id` - _required_ - Required ID of Show.
* `Includes` - _optional_ - List of additional objects to include in the show response.

### Get Season by ShowId and Season Number.

> Depreciated. Use GetSeasonBySeasonNumber instead.  Requires a valid ShowId and Season Number.

*Tags:* `Shows`

#### Input Parameters
* `Id` - _required_ - Id of a Show.
* `SeasonNumber` - _required_ - Number of a Season belonging to a Show.
* `Includes` - _optional_ - List of additional objects to include in the season response.

### Get Episode by ShowId, Season Number and Episode Number.

> Requires a valid ShowId, Season Number and Episode Number.

*Tags:* `Shows`

#### Input Parameters
* `Id` - _required_ - Required Id of the Show.
* `SeasonNumber` - _required_ - Required SeasonNumber.
* `EpisodeNumber` - _required_ - Required EpisodeNumber.
* `Includes` - _optional_ - List of additional objects to include in the episode response.

### Returns translated time from IVA or an error if invalid.

> Entertainment Express APIs use date time format ISO 8601.  Use this API to test your date time format to see if it translates to a valid time on our server.

*Tags:* `Tests`

#### Input Parameters
* `DateTime` - _required_ - DateTime to test format from API.

### Returns list of all US Theatrical Movie objects.

> Deprecated. Use /Movies/InTheaters or /Movies/ComingSoon instead. Returns all movies with a US Theatrical Release Date > today - 60 days.  Use the includes parameter to include additional objects related to the movie.  The includes parameter takes a comma separated list of objects.  **EX: Genres,Descriptions,Videos**

*Tags:* `TheatricalMovies`

#### Input Parameters
* `Skip` - _required_ - Determines where to start page.  Ex: 0 starts at the beginning.
* `Take` - _required_ - Determines the page size.  (Maximum of 10)
* `Includes` - _optional_ - List of additional objects to include in the movie response.

### List of Videos for a program.

*Tags:* `TvGrid`

#### Input Parameters
* `Id` - _optional_

### Gets list of movie genres.

*Tags:* `TvGrid`

#### Input Parameters
* `TvMediaApiKey` - _required_ - API Key supplied by TvMedia.ca

### Gets list of show genres.

*Tags:* `TvGrid`

#### Input Parameters
* `TvMediaApiKey` - _required_ - API Key supplied by TvMedia.ca

### Gets list of sports genres.

*Tags:* `TvGrid`

#### Input Parameters
* `TvMediaApiKey` - _required_ - API Key supplied by TvMedia.ca

### Gets list of sports leagues.

*Tags:* `TvGrid`

#### Input Parameters
* `TvMediaApiKey` - _required_ - API Key supplied by TvMedia.ca

### Retrieve listings for a given leagueID.

*Tags:* `TvGrid`

#### Input Parameters
* `TvMediaApiKey` - _required_ - API Key supplied by TvMedia.ca
* `LeagueID` - _required_ - League ID. See /leagues for a list of all available sports leagues.
* `LineupID` - _required_ - Lineup ID. Lineups can be found through the /TvMedia/lineups method.
* `Start` - _optional_ - UTC start time in ISO8601. Defaults to current date and time.
* `End` - _optional_ - UTC end time in ISO8601. Defaults to 'start' time +4 hours.
* `TimeZone` - _optional_ - Set a timezone or time offset for listing times (listDateTime property). Defaults to UTC, accepts time offsets (+/-HH:MM) or named time zones (see IANA Time Zone Database). If an invalid value is set, listDateTime will be returned as empty. NOTE: this parameter does not affect input values; start and end times must still be provided in UTC.
* `Channel` - _optional_ - Include only channel(s) with this number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property , NOT channel.channelNumber property).
* `ExcludeChan` - _optional_ - Exclude channels by number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property, NOT the channel.channelNumber property).
* `StartChan` - _optional_ - Lowest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1.
* `EndChan` - _optional_ - Highest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1. In general this parameter should rarely be used, for shaping the grid size see the 'maxchan' parameter.
* `Station` - _optional_ - Filter by station ID. Array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
* `ExcludeStation` - _optional_ - Filter out station IDs; array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
* `Search` - _optional_ - search value: can be a show, episode, movie, team, league, person, etc. Results will be sorted by relevance rather than time.
* `ShowType` - _optional_ - Include only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
* `ExcludeShowType` - _optional_ - Exclude only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
* `Id` - _optional_ - ListingID, array or single values accepted. to return a single listing it should be used in combination with a stationID (station parameter).
* `SportType` - _optional_ - Get only sports listings of type sportTypeID. Array or single values accepted. For a list of possible values see /genres/sports.
* `League` - _optional_ - Get only sports listings in the given league ID(s). Array or single values accepted. For a list of possible values see /leagues.
* `Team` - _optional_ - Filter by teams playing by name(teams.longName). Array or single values accepted, for a list of possible values see /leagues/teams. (NOTE: league parameter is required when using this parameter).
* `NotYetStarted` - _optional_ - Only displays listings which are starting on or after the given start time. No value necessary.
* `SportEventsOnly` - _optional_ - Get sporting events only. No value necessary.
* `DescriptiveVideoOnly` - _optional_ - Only displays listings which are flagged as being broadcast with Descriptive Video. No value necessary.
* `LiveOnly` - _optional_ - Only displays live listings. No value necessary.
* `NewShowsOnly` - _optional_ - Get new shows only. No value necessary.
* `AdultContent` - _optional_ - Defaults to 1 (allowed). Set to 0 to hide adult content.
* `DisplayArtwork` - _optional_ - Displays the Artwork information. Set to 1 to include, 1 is default. 0 to hide (will improve performance).
* `Detail` - _optional_ - Set level of detail for response. values are 'full' or 'brief', defaults to 'full'. 'full' will include all properties, 'brief' will exclude optional properties.
    Possible values: full, brief.

### Gets list of teams in a league.

*Tags:* `TvGrid`

#### Input Parameters
* `TvMediaApiKey` - _required_ - API Key supplied by TvMedia.ca
* `LeagueID` - _required_ - League ID. See /TvMedia/leagues for a list of all available sports leagues.

### Get lineups by postal code.

*Tags:* `TvGrid`

#### Input Parameters
* `TvMediaApiKey` - _required_ - API Key supplied by TvMedia.ca
* `PostalCode` - _required_ - Postal code.
* `LineupType` - _optional_ - Filter by lineup type, valid types are OTA, SAT, CAB, IPTV.
    Possible values: OTA, SAT, CAB, IPTV.
* `ProviderId` - _optional_ - Filter by provider ID
* `Detail` - _optional_ - Set level of detail for response. values are 'full' or 'brief', defaults to 'brief'. 'full' will include all properties, 'brief' will exclude optional properties.
    Possible values: full, brief.

### Starting point for lineup browser, returns available countries.

*Tags:* `TvGrid`

#### Input Parameters
* `TvMediaApiKey` - _required_ - API Key supplied by TvMedia.ca

### Browse regions by country.

*Tags:* `TvGrid`

#### Input Parameters
* `TvMediaApiKey` - _required_ - API Key supplied by TvMedia.ca
* `CountryID` - _required_ - Country abbreviation. See TvMedia/lineups/browse for a list of supported countries.

### Get service areas for a specific country and region.

*Tags:* `TvGrid`

#### Input Parameters
* `TvMediaApiKey` - _required_ - API Key supplied by TvMedia.ca
* `CountryID` - _required_ - Country abbreviation. See TvMedia/lineups/browse for a list of supported countries.
* `RegionID` - _required_ - Region abbreviation. See TvMedia/lineups/browse/{CountryID} for a list of regions.

### Get lineups by AreaID.

*Tags:* `TvGrid`

#### Input Parameters
* `TvMediaApiKey` - _required_ - API Key supplied by TvMedia.ca
* `CountryID` - _required_ - Country abbreviation. See TvMedia/lineups/browse for a list of supported countries.
* `RegionID` - _required_ - Region abbreviation. See TvMedia/lineups/browse/{CountryID} for a list of regions.
* `AreaID` - _required_ - Service area ID. See TvMedia/lineups/browse/{CountryID}/{RegionID} for a list of service areas.
* `LineupType` - _optional_ - Filter by lineup type, valid types are OTA, SAT, CAB, IPTV.
    Possible values: OTA, SAT, CAB, IPTV.
* `ProviderId` - _optional_ - Filter by provider ID
* `Detail` - _optional_ - Set level of detail for response. values are 'full' or 'brief', defaults to 'brief'. 'full' will include all properties, 'brief' will exclude optional properties.
    Possible values: full, brief.

### Get lineups by latitude and longitude.

*Tags:* `TvGrid`

#### Input Parameters
* `TvMediaApiKey` - _required_ - API Key supplied by TvMedia.ca
* `Latitude` - _required_ - Latitude (geographic coordinate).
* `Longitude` - _required_ - Longitude (geographic coordinate).
* `LineupType` - _optional_ - Filter by lineup type, valid types are OTA, SAT, CAB, IPTV.
    Possible values: OTA, SAT, CAB, IPTV.
* `ProviderId` - _optional_ - Filter by provider ID
* `Detail` - _optional_ - Set level of detail for response. values are 'full' or 'brief', defaults to 'brief'. 'full' will include all properties, 'brief' will exclude optional properties.
    Possible values: full, brief.

### Get lineups by specific LineupID.

*Tags:* `TvGrid`

#### Input Parameters
* `TvMediaApiKey` - _required_ - API Key supplied by TvMedia.ca
* `LineupID` - _required_ - Lineup ID.
* `Detail` - _optional_ - Set level of detail for response. values are 'full' or 'brief', defaults to 'full'. 'full' will include all properties, 'brief' will exclude optional properties.
    Possible values: full, brief.

### Retrieve individual listings for a given lineup ordered by start time (listDateTime) and channel number; unless using the search parameter, in which case they will be ordered by search term relevance.

*Tags:* `TvGrid`

#### Input Parameters
* `TvMediaApiKey` - _required_ - API Key supplied by TvMedia.ca
* `LineupID` - _required_ - Lineup ID.
* `Start` - _optional_ - UTC start time in ISO8601. Defaults to current date and time.
* `End` - _optional_ - UTC end time in ISO8601. Defaults to 'start' time +4 hours.
* `TimeZone` - _optional_ - Set a timezone or time offset for listing times (listDateTime property). Defaults to UTC, accepts time offsets (+/-HH:MM) or named time zones (see IANA Time Zone Database). If an invalid value is set, listDateTime will be returned as empty. NOTE: this parameter does not affect input values; start and end times must still be provided in UTC.
* `Channel` - _optional_ - Include only channel(s) with this number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property , NOT channel.channelNumber property).
* `ExcludeChan` - _optional_ - Exclude channels by number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property, NOT the channel.channelNumber property).
* `StartChan` - _optional_ - Lowest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1.
* `EndChan` - _optional_ - Highest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1. In general this parameter should rarely be used, for shaping the grid size see the 'maxchan' parameter.
* `Station` - _optional_ - Filter by station ID. Array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
* `ExcludeStation` - _optional_ - Filter out station IDs; array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
* `Search` - _optional_ - search value: can be a show, episode, movie, team, league, person, etc. Results will be sorted by relevance rather than time.
* `ShowType` - _optional_ - Include only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
* `ExcludeShowType` - _optional_ - Exclude only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
* `Id` - _optional_ - ListingID, array or single values accepted. to return a single listing it should be used in combination with a stationID (station parameter).
* `SportType` - _optional_ - Get only sports listings of type sportTypeID. Array or single values accepted. For a list of possible values see /genres/sports.
* `League` - _optional_ - Get only sports listings in the given league ID(s). Array or single values accepted. For a list of possible values see /leagues.
* `Team` - _optional_ - Filter by teams playing by name(teams.longName). Array or single values accepted, for a list of possible values see /leagues/teams. (NOTE: league parameter is required when using this parameter).
* `NotYetStarted` - _optional_ - Only displays listings which are starting on or after the given start time. No value necessary.
* `SportEventsOnly` - _optional_ - Get sporting events only. No value necessary.
* `DescriptiveVideoOnly` - _optional_ - Only displays listings which are flagged as being broadcast with Descriptive Video. No value necessary.
* `LiveOnly` - _optional_ - Only displays live listings. No value necessary.
* `NewShowsOnly` - _optional_ - Get new shows only. No value necessary.
* `AdultContent` - _optional_ - Defaults to 1 (allowed). Set to 0 to hide adult content.
* `DisplayArtwork` - _optional_ - Displays the Artwork information. Set to 1 to include, 1 is default. 0 to hide (will improve performance).
* `Detail` - _optional_ - Set level of detail for response. values are 'full' or 'brief', defaults to 'full'. 'full' will include all properties, 'brief' will exclude optional properties.
    Possible values: full, brief.

### A collection of listings grouped by channel and ordered by listDateTime. The grid dimensions ( time x channels ) can be modified by using the start, end, startchan and maxchan parameters. Channels without any listings will be returned with an empty listings collection.

*Tags:* `TvGrid`

#### Input Parameters
* `TvMediaApiKey` - _required_ - API Key supplied by TvMedia.ca
* `LineupID` - _required_ - Lineup ID.
* `Start` - _optional_ - UTC start time in ISO8601. Defaults to current date and time.
* `End` - _optional_ - UTC end time in ISO8601. Defaults to 'start' time +4 hours.
* `TimeZone` - _optional_ - Set a timezone or time offset for listing times (listDateTime property). Defaults to UTC, accepts time offsets (+/-HH:MM) or named time zones (see IANA Time Zone Database). If an invalid value is set, listDateTime will be returned as empty. NOTE: this parameter does not affect input values; start and end times must still be provided in UTC.
* `Channel` - _optional_ - Include only channel(s) with this number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property , NOT channel.channelNumber property).
* `ExcludeChan` - _optional_ - Exclude channels by number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property, NOT the channel.channelNumber property).
* `StartChan` - _optional_ - Lowest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1.
* `EndChan` - _optional_ - Highest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1. In general this parameter should rarely be used, for shaping the grid size see the 'maxchan' parameter.
* `Station` - _optional_ - Filter by station ID. Array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
* `ExcludeStation` - _optional_ - Filter out station IDs; array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
* `Search` - _optional_ - search value: can be a show, episode, movie, team, league, person, etc. Results will be sorted by relevance rather than time.
* `ShowType` - _optional_ - Include only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
* `ExcludeShowType` - _optional_ - Exclude only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
* `Id` - _optional_ - ListingID, array or single values accepted. to return a single listing it should be used in combination with a stationID (station parameter).
* `SportType` - _optional_ - Get only sports listings of type sportTypeID. Array or single values accepted. For a list of possible values see /genres/sports.
* `League` - _optional_ - Get only sports listings in the given league ID(s). Array or single values accepted. For a list of possible values see /leagues.
* `Team` - _optional_ - Filter by teams playing by name(teams.longName). Array or single values accepted, for a list of possible values see /leagues/teams. (NOTE: league parameter is required when using this parameter).
* `NotYetStarted` - _optional_ - Only displays listings which are starting on or after the given start time. No value necessary.
* `SportEventsOnly` - _optional_ - Get sporting events only. No value necessary.
* `DescriptiveVideoOnly` - _optional_ - Only displays listings which are flagged as being broadcast with Descriptive Video. No value necessary.
* `LiveOnly` - _optional_ - Only displays live listings. No value necessary.
* `NewShowsOnly` - _optional_ - Get new shows only. No value necessary.
* `AdultContent` - _optional_ - Defaults to 1 (allowed). Set to 0 to hide adult content.
* `DisplayArtwork` - _optional_ - Displays the Artwork information. Set to 1 to include, 1 is default. 0 to hide (will improve performance).
* `Detail` - _optional_ - Set level of detail for response. values are 'full' or 'brief', defaults to 'full'. 'full' will include all properties, 'brief' will exclude optional properties.
    Possible values: full, brief.

### Retrieves featured listings. setting a start and/or end time for every request is a highly recommended.

*Tags:* `TvGrid`

#### Input Parameters
* `TvMediaApiKey` - _required_ - API Key supplied by TvMedia.ca
* `LineupID` - _required_ - Lineup ID.
* `Start` - _optional_ - UTC start time in ISO8601. Defaults to current date and time.
* `End` - _optional_ - UTC end time in ISO8601. Defaults to 'start' time +4 hours.
* `TimeZone` - _optional_ - Set a timezone or time offset for listing times (listDateTime property). Defaults to UTC, accepts time offsets (+/-HH:MM) or named time zones (see IANA Time Zone Database). If an invalid value is set, listDateTime will be returned as empty. NOTE: this parameter does not affect input values; start and end times must still be provided in UTC.
* `Channel` - _optional_ - Include only channel(s) with this number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property , NOT channel.channelNumber property).
* `ExcludeChan` - _optional_ - Exclude channels by number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property, NOT the channel.channelNumber property).
* `StartChan` - _optional_ - Lowest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1.
* `EndChan` - _optional_ - Highest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1. In general this parameter should rarely be used, for shaping the grid size see the 'maxchan' parameter.
* `Station` - _optional_ - Filter by station ID. Array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
* `ExcludeStation` - _optional_ - Filter out station IDs; array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
* `Search` - _optional_ - search value: can be a show, episode, movie, team, league, person, etc. Results will be sorted by relevance rather than time.
* `ShowType` - _optional_ - Include only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
* `ExcludeShowType` - _optional_ - Exclude only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
* `Id` - _optional_ - ListingID, array or single values accepted. to return a single listing it should be used in combination with a stationID (station parameter).
* `SportType` - _optional_ - Get only sports listings of type sportTypeID. Array or single values accepted. For a list of possible values see /genres/sports.
* `League` - _optional_ - Get only sports listings in the given league ID(s). Array or single values accepted. For a list of possible values see /leagues.
* `Team` - _optional_ - Filter by teams playing by name(teams.longName). Array or single values accepted, for a list of possible values see /leagues/teams. (NOTE: league parameter is required when using this parameter).
* `NotYetStarted` - _optional_ - Only displays listings which are starting on or after the given start time. No value necessary.
* `SportEventsOnly` - _optional_ - Get sporting events only. No value necessary.
* `DescriptiveVideoOnly` - _optional_ - Only displays listings which are flagged as being broadcast with Descriptive Video. No value necessary.
* `LiveOnly` - _optional_ - Only displays live listings. No value necessary.
* `NewShowsOnly` - _optional_ - Get new shows only. No value necessary.
* `AdultContent` - _optional_ - Defaults to 1 (allowed). Set to 0 to hide adult content.
* `DisplayArtwork` - _optional_ - Displays the Artwork information. Set to 1 to include, 1 is default. 0 to hide (will improve performance).
* `Detail` - _optional_ - Set level of detail for response. values are 'full' or 'brief', defaults to 'full'. 'full' will include all properties, 'brief' will exclude optional properties.
    Possible values: full, brief.

### Get list of generic lineup IDs that can be used.  A 'generic' lineup is not a real lineup, but a collection of stations defined by TV Media.  Any listing retrieved using a generic lineup will not return any channel number information, as it is irrelevant.

*Tags:* `TvGrid`

#### Input Parameters
* `TvMediaApiKey` - _required_ - API Key supplied by TvMedia.ca
* `Detail` - _optional_ - Set level of detail for response. values are 'full' or 'brief', defaults to 'brief'. 'full' will include all properties, 'brief' will exclude optional properties.
    Possible values: full, brief.

### Gets station details by ID.

*Tags:* `TvGrid`

#### Input Parameters
* `TvMediaApiKey` - _required_ - API Key supplied by TvMedia.ca
* `StationID` - _required_ - Station ID. Station ID's can be found in listings, or by using the Tvmedia/lineups API

### Stations are not tied to lineups, therefore no channel numbers will be present in the response, unlike most other listing operations.

> Get listings for a given station.

*Tags:* `TvGrid`

#### Input Parameters
* `TvMediaApiKey` - _required_ - API Key supplied by TvMedia.ca
* `StationID` - _required_ - Station ID. Station ID's can be found in listings, or by using the Tvmedia/lineups API
* `Start` - _optional_ - UTC start time in ISO8601. Defaults to current date and time.
* `End` - _optional_ - UTC end time in ISO8601. Defaults to 'start' time +4 hours.
* `TimeZone` - _optional_ - Set a timezone or time offset for listing times (listDateTime property). Defaults to UTC, accepts time offsets (+/-HH:MM) or named time zones (see IANA Time Zone Database). If an invalid value is set, listDateTime will be returned as empty. NOTE: this parameter does not affect input values; start and end times must still be provided in UTC.
* `Channel` - _optional_ - Include only channel(s) with this number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property , NOT channel.channelNumber property).
* `ExcludeChan` - _optional_ - Exclude channels by number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property, NOT the channel.channelNumber property).
* `StartChan` - _optional_ - Lowest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1.
* `EndChan` - _optional_ - Highest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1. In general this parameter should rarely be used, for shaping the grid size see the 'maxchan' parameter.
* `Station` - _optional_ - Filter by station ID. Array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
* `ExcludeStation` - _optional_ - Filter out station IDs; array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
* `Search` - _optional_ - search value: can be a show, episode, movie, team, league, person, etc. Results will be sorted by relevance rather than time.
* `ShowType` - _optional_ - Include only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
* `ExcludeShowType` - _optional_ - Exclude only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
* `Id` - _optional_ - ListingID, array or single values accepted. to return a single listing it should be used in combination with a stationID (station parameter).
* `SportType` - _optional_ - Get only sports listings of type sportTypeID. Array or single values accepted. For a list of possible values see /genres/sports.
* `League` - _optional_ - Get only sports listings in the given league ID(s). Array or single values accepted. For a list of possible values see /leagues.
* `Team` - _optional_ - Filter by teams playing by name(teams.longName). Array or single values accepted, for a list of possible values see /leagues/teams. (NOTE: league parameter is required when using this parameter).
* `NotYetStarted` - _optional_ - Only displays listings which are starting on or after the given start time. No value necessary.
* `SportEventsOnly` - _optional_ - Get sporting events only. No value necessary.
* `DescriptiveVideoOnly` - _optional_ - Only displays listings which are flagged as being broadcast with Descriptive Video. No value necessary.
* `LiveOnly` - _optional_ - Only displays live listings. No value necessary.
* `NewShowsOnly` - _optional_ - Get new shows only. No value necessary.
* `AdultContent` - _optional_ - Defaults to 1 (allowed). Set to 0 to hide adult content.
* `DisplayArtwork` - _optional_ - Displays the Artwork information. Set to 1 to include, 1 is default. 0 to hide (will improve performance).
* `Detail` - _optional_ - Set level of detail for response. values are 'full' or 'brief', defaults to 'full'. 'full' will include all properties, 'brief' will exclude optional properties.
    Possible values: full, brief.

### Gets details for a specific team.

*Tags:* `TvGrid`

#### Input Parameters
* `TvMediaApiKey` - _required_ - API Key supplied by TvMedia.ca
* `TeamID` - _required_ - Team ID.

### Retrieve listings for a given TeamID.

*Tags:* `TvGrid`

#### Input Parameters
* `TvMediaApiKey` - _required_ - API Key supplied by TvMedia.ca
* `TeamID` - _required_ - Team ID. See /teams for a list of all available sports teams.
* `LineupID` - _required_ - Lineup ID. Lineups can be found through the /TvMedia/lineups method.
* `Start` - _optional_ - UTC start time in ISO8601. Defaults to current date and time.
* `End` - _optional_ - UTC end time in ISO8601. Defaults to 'start' time +4 hours.
* `TimeZone` - _optional_ - Set a timezone or time offset for listing times (listDateTime property). Defaults to UTC, accepts time offsets (+/-HH:MM) or named time zones (see IANA Time Zone Database). If an invalid value is set, listDateTime will be returned as empty. NOTE: this parameter does not affect input values; start and end times must still be provided in UTC.
* `Channel` - _optional_ - Include only channel(s) with this number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property , NOT channel.channelNumber property).
* `ExcludeChan` - _optional_ - Exclude channels by number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property, NOT the channel.channelNumber property).
* `StartChan` - _optional_ - Lowest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1.
* `EndChan` - _optional_ - Highest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1. In general this parameter should rarely be used, for shaping the grid size see the 'maxchan' parameter.
* `Station` - _optional_ - Filter by station ID. Array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
* `ExcludeStation` - _optional_ - Filter out station IDs; array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
* `Search` - _optional_ - search value: can be a show, episode, movie, team, league, person, etc. Results will be sorted by relevance rather than time.
* `ShowType` - _optional_ - Include only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
* `ExcludeShowType` - _optional_ - Exclude only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
* `Id` - _optional_ - ListingID, array or single values accepted. to return a single listing it should be used in combination with a stationID (station parameter).
* `SportType` - _optional_ - Get only sports listings of type sportTypeID. Array or single values accepted. For a list of possible values see /genres/sports.
* `League` - _optional_ - Get only sports listings in the given league ID(s). Array or single values accepted. For a list of possible values see /leagues.
* `Team` - _optional_ - Filter by teams playing by name(teams.longName). Array or single values accepted, for a list of possible values see /leagues/teams. (NOTE: league parameter is required when using this parameter).
* `NotYetStarted` - _optional_ - Only displays listings which are starting on or after the given start time. No value necessary.
* `SportEventsOnly` - _optional_ - Get sporting events only. No value necessary.
* `DescriptiveVideoOnly` - _optional_ - Only displays listings which are flagged as being broadcast with Descriptive Video. No value necessary.
* `LiveOnly` - _optional_ - Only displays live listings. No value necessary.
* `NewShowsOnly` - _optional_ - Get new shows only. No value necessary.
* `AdultContent` - _optional_ - Defaults to 1 (allowed). Set to 0 to hide adult content.
* `DisplayArtwork` - _optional_ - Displays the Artwork information. Set to 1 to include, 1 is default. 0 to hide (will improve performance).
* `Detail` - _optional_ - Set level of detail for response. values are 'full' or 'brief', defaults to 'full'. 'full' will include all properties, 'brief' will exclude optional properties.
    Possible values: full, brief.

### Redirect URL to video.

> Returns a URL to the requested video. [Video Format Specs](https://developer.iva-api.com/docs/v1/video-formats)<br/>
> <br/>
> **Formats:** MP4 = 4, HLS = 11, Dash = 14, HSS = 12, HDS = 13<br/>
> <br/>
> **MP4 KbRate:** 80, 212, 450, 750, 1500, 2500(HD sources only), 5000 (sources >=  1080p)  <br/>
> <br/>
> **Adaptive Min/Max rate:** 212000, 350000, 600000, 1200000, 2000000, 2500000, 3500000  <br/>
> <br/>
>  `URLs requested with a Demo account will always return max 750 kbps video.  Full commercial account required for higher bitrates.`

*Tags:* `Videos`

#### Input Parameters
* `Id` - _required_ - Id of the Video from either MovieVideo, ShowVideo, SeasonVideo, EpisodeVideo object.
* `Format` - _required_ - Video format.
    Possible values: mp4, hls, hss, hds, dash.
* `KbRate` - _optional_ - Video bitrate required for MP4 content.
    Possible values: NOT_SET, mp4_80, mp4_212, mp4_450, mp4_750, mp4_1500, mp4_2500, mp4_5000, mp4_8000.
* `Expires` - _required_ - UTC Time to video link should expire. ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
* `ReportTag` - _optional_ - Report tag used in video analytics.
* `start` - _optional_ - Position in seconds to start video playback.
* `end` - _optional_ - Position in seconds to end video playback.
* `MinRate` - _optional_ - Adaptive Maximum rate.
    Possible values: adap_212000, adap_350000, adap_600000, adap_1200000, adap_2000000, adap_2500000, adap_3500000.
* `MaxRate` - _optional_ - Adaptive Minimum rate.
    Possible values: adap_212000, adap_350000, adap_600000, adap_1200000, adap_2000000, adap_2500000, adap_3500000.

### List of Recommendations for movie or show.

*Tags:* `XroadMedia`

#### Input Parameters
* `MovieId` - _optional_ - Source MovieId for recommendations.
* `ShowId` - _optional_ - Source ShowId for recommendations.
* `Type` - _optional_ - Type of recommendation response.
    Possible values: similar, similarShowsOnly, similarMoviesOnly.

## License

**flow**ground :- Telekom iPaaS / iva-api-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
