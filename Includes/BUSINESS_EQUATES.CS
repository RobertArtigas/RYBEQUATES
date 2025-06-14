  //BOF
  //
  // File:         ..\Includes\Temp\BUSINESS_EQUATES.CS
  // Date-Time:    2025/06/13 - 08:49:51PM
  // Purpose:      Define global table includes for applications
  // Author:       Copyright © 2018-2025 by Roberto Artigas y Soler
  //               All Rights Reserved World Wide.
  //               MIT License.
  //
  // -----------------------------------------------------------------
  // -----------------------------------------------------------------
  // The EQUATES ---might--- have cross uses in other areas in the architecture.
  // IMPORTANT: Please NOTE that the equates are syncronized up in the same order.
  // -----------------------------------------------------------------
  // -----------------------------------------------------------------
  #region EQUATES
  public const int C_BUZ_EQU_FIRST                     = 1;                                                                                          //:001: First Entry
  public const int C_BUZ_EQU_STARSYSTEM                = 2;                                                                                          //:002: Starzation (Sales) (Origin Star System)
  public const int C_BUZ_EQU_PLANETARYBODIES           = 3;                                                                                          //:003: Planetization (Sales) (Earth, Moon, Mars, Asteroids)
  public const int C_BUZ_EQU_CONTINENT                 = 4;                                                                                          //:004: Internationalization (Sales)
  public const int C_BUZ_EQU_CONTINENTAREA             = 5;                                                                                          //:005: Internationalization (Sales)
  public const int C_BUZ_EQU_COUNTRY                   = 6;                                                                                          //:006: Internationalization (Sales)
  public const int C_BUZ_EQU_STATES                    = 7;                                                                                          //:007: Internationalization (Sales)
  public const int C_BUZ_EQU_COUNTY                    = 8;                                                                                          //:008: Internationalization (Sales)
  public const int C_BUZ_EQU_CITY                      = 9;                                                                                          //:009: Internationalization (Sales)
  public const int C_BUZ_EQU_LANGUAGE                  = 10;                                                                                         //:010: Internationalization (Sales)
  public const int C_BUZ_EQU_CURRENCY                  = 11;                                                                                         //:011: Internationalization (Sales)
  public const int C_BUZ_EQU_CALENDAR                  = 12;                                                                                         //:012: Internationalization (Sales)
  public const int C_BUZ_EQU_TIMEZONE                  = 13;                                                                                         //:013: Internationalization (Sales)
  public const int C_BUZ_EQU_MEASURE                   = 14;                                                                                         //:014: Internationalization (Sales)
  public const int C_BUZ_EQU_CULTURE                   = 15;                                                                                         //:015: Internationalization (Sales)
  public const int C_BUZ_EQU_POLITICAL                 = 16;                                                                                         //:016: Internationalization (Sales)
  public const int C_BUZ_EQU_LOCATION                  = 17;                                                                                         //:017: Internationalization (Sales) (Latitude,Longitude,Altitude)
  public const int C_BUZ_EQU_IDENTITY                  = 18;                                                                                         //:018: Country Formats (Sales)
  public const int C_BUZ_EQU_NAME                      = 19;                                                                                         //:019: Country Formats (Sales)
  public const int C_BUZ_EQU_ADDRESS                   = 20;                                                                                         //:020: Country Formats (Sales)
  public const int C_BUZ_EQU_POSTALCODE                = 21;                                                                                         //:021: Country Formats (Sales)
  public const int C_BUZ_EQU_PARTY                     = 22;                                                                                         //:022: Country Formats (Sales)
  public const int C_BUZ_EQU_AGENT                     = 23;                                                                                         //:023: Sales Person, Employee, Manager, Owner, Robot, etc (Sales, Manufacturing, Overhead)
  public const int C_BUZ_EQU_COMMUNICATION             = 24;                                                                                         //:024: Communication (Everything)
  public const int C_BUZ_EQU_ENTITY                    = 25;                                                                                         //:025: EMS: Entity Management System (Enterprise Management System) (Assets,Liabilities)
  public const int C_BUZ_EQU_GOVERNMENT                = 26;                                                                                         //:026: GMS: Government Management System (Taxes, Everything)
  public const int C_BUZ_EQU_MARKETING                 = 27;                                                                                         //:027: MMS: Marketing Management System (Development, Retention, Pricing, Costing, Sales)
  public const int C_BUZ_EQU_CLIENT                    = 28;                                                                                         //:028: CMS: Client Management System (Income)
  public const int C_BUZ_EQU_VENDOR                    = 29;                                                                                         //:029: VMS: Vendor Management System (Expenses)
  public const int C_BUZ_EQU_SHIPPER                   = 30;                                                                                         //:030: SMS: Shipper Management System (Income/Expenses)
  public const int C_BUZ_EQU_FBS                       = 31;                                                                                         //:031: Financial Balance Sheet (Assets - Liabilities = Equity | Health)
  public const int C_BUZ_EQU_FPL                       = 32;                                                                                         //:032: Financial Profit & Loss (Income - Expenses = Net Profit | Cash Flow)
  public const int C_BUZ_EQU_KPICOUNTRY                = 33;                                                                                         //:033: Key Performance Indicators (Country Level Markets and Financials)
  public const int C_BUZ_EQU_KPIMARKETS                = 34;                                                                                         //:034: Key Performance Indicators (Industry Level Markets and Financials)
  public const int C_BUZ_EQU_KPICOMPANY                = 35;                                                                                         //:035: Key Performance Indicators (Health Checkup | Cash Flow Checkup)
  public const int C_BUZ_EQU_KPIEMPLOYEES              = 36;                                                                                         //:036: Key Performance Indicators (Employee Satisfaction | Health)
  public const int C_BUZ_EQU_KPICUSTOMERS              = 37;                                                                                         //:037: Key Performance Indicators (Customer Satisfaction | Health)
  public const int C_BUZ_EQU_KPIPROCESSES              = 38;                                                                                         //:038: Key Performance Indicators (Internal Processes | Health)
  public const int C_BUZ_EQU_KPIFINANCIAL              = 39;                                                                                         //:039: Key Performance Indicators (Financial Processes | Health | Cash Flow)
  public const int C_BUZ_EQU_MACHINE                   = 40;                                                                                         //:040: Machine (Manufacturing)
  public const int C_BUZ_EQU_TOOL                      = 41;                                                                                         //:041: Tool (Manufacturing)
  public const int C_BUZ_EQU_GAGE                      = 42;                                                                                         //:042: Gage (Manufacturing)
  public const int C_BUZ_EQU_TRUCK                     = 43;                                                                                         //:043: Truck (Fulfillment)
  public const int C_BUZ_EQU_SERVICE                   = 44;                                                                                         //:044: Service Items (Sales, Material, Time, Manufacturing)
  public const int C_BUZ_EQU_INVENTORY                 = 45;                                                                                         //:045: Inventory Items (Sales, Material, Manufacturing)
  public const int C_BUZ_EQU_SUPPLY                    = 46;                                                                                         //:046: Consumable Items (Sales, Manufacturing, Overhead)
  public const int C_BUZ_EQU_WAREHOUSE                 = 47;                                                                                         //:047: Storage of Items (Sales, Material, Manufacturing, Overhead)
  public const int C_BUZ_EQU_PRICING                   = 48;                                                                                         //:048: Historical Goods, Services, and Inventory Pricing (Sales)
  public const int C_BUZ_EQU_COSTING                   = 49;                                                                                         //:049: Historical Goods, Services, and Inventory Costing (Sales)
  public const int C_BUZ_EQU_DOCUMENT                  = 50;                                                                                         //:050: Contracts (Sales), Certificates (Manufacturing)
  public const int C_BUZ_EQU_IMAGE                     = 51;                                                                                         //:051: Contracts (Sales), Certificates (Manufacturing)
  public const int C_BUZ_EQU_SCHEMATIC                 = 52;                                                                                         //:052: Diagram, Drawing, Plan, Blueprint (Sales, Manufacturing)
  public const int C_BUZ_EQU_RFI                       = 53;                                                                                         //:053: Request For Information (Sales)
  public const int C_BUZ_EQU_RFIHEADER                 = 54;                                                                                         //:054: Request For Information
  public const int C_BUZ_EQU_RFIDETAIL                 = 55;                                                                                         //:055: Request For Information
  public const int C_BUZ_EQU_RFP                       = 56;                                                                                         //:056: Request For Proposal (Sales)
  public const int C_BUZ_EQU_RFPHEADER                 = 57;                                                                                         //:057: Request For Proposal
  public const int C_BUZ_EQU_RFPDETAIL                 = 58;                                                                                         //:058: Request For Proposal
  public const int C_BUZ_EQU_RFQ                       = 59;                                                                                         //:059: Request For Quote (Sales)
  public const int C_BUZ_EQU_RFQHEADER                 = 60;                                                                                         //:060: Request For Quote
  public const int C_BUZ_EQU_RFQDETAIL                 = 61;                                                                                         //:061: Request For Quote
  public const int C_BUZ_EQU_RFO                       = 62;                                                                                         //:062: Request For Order (Sales)
  public const int C_BUZ_EQU_RFOHEADER                 = 63;                                                                                         //:063: Request For Order
  public const int C_BUZ_EQU_RFODETAIL                 = 64;                                                                                         //:064: Request For Order
  public const int C_BUZ_EQU_RFW                       = 65;                                                                                         //:065: Request For Work (Service, Product)
  public const int C_BUZ_EQU_RFWHEADER                 = 66;                                                                                         //:066: Request For Work
  public const int C_BUZ_EQU_RFWDETAIL                 = 67;                                                                                         //:067: Request For Work
  public const int C_BUZ_EQU_RFB                       = 68;                                                                                         //:068: Request For Bill (Financial Processes)
  public const int C_BUZ_EQU_RFBHEADER                 = 69;                                                                                         //:069: Request For Bill
  public const int C_BUZ_EQU_RFBDETAIL                 = 70;                                                                                         //:070: Request For Bill
  public const int C_BUZ_EQU_RFA                       = 71;                                                                                         //:071: Request For Payment (Financial Processes)
  public const int C_BUZ_EQU_RFAHEADER                 = 72;                                                                                         //:072: Request For Payment
  public const int C_BUZ_EQU_RFADETAIL                 = 73;                                                                                         //:073: Request For Payment
  public const int C_BUZ_EQU_RFC                       = 74;                                                                                         //:074: Request For Collection (Financial Processes)
  public const int C_BUZ_EQU_RFCHEADER                 = 75;                                                                                         //:075: Request For Collection
  public const int C_BUZ_EQU_RFCDETAIL                 = 76;                                                                                         //:076: Request For Collection
  public const int C_BUZ_EQU_BOM                       = 77;                                                                                         //:077: Bill Of Materials (Manufacturing, Service)
  public const int C_BUZ_EQU_BOMHEADER                 = 78;                                                                                         //:078: Bill Of Materials
  public const int C_BUZ_EQU_BOMDETAIL                 = 79;                                                                                         //:079: Bill Of Materials
  public const int C_BUZ_EQU_BOO                       = 80;                                                                                         //:080: Bill Of Operations (Manufacturing, Service)
  public const int C_BUZ_EQU_BOOHEADER                 = 81;                                                                                         //:081: Bill Of Operations
  public const int C_BUZ_EQU_BOODETAIL                 = 82;                                                                                         //:082: Bill Of Operations
  public const int C_BUZ_EQU_QUALITY                   = 83;                                                                                         //:083: Quality Control (Material, Manufacturing)
  public const int C_BUZ_EQU_PICKING                   = 84;                                                                                         //:084: Picking (Fulfillment)
  public const int C_BUZ_EQU_PACKING                   = 85;                                                                                         //:085: Packing (Fulfillment)
  public const int C_BUZ_EQU_SHIPPING                  = 86;                                                                                         //:086: Shipping (Fulfillment)
  public const int C_BUZ_EQU_RETURN                    = 87;                                                                                         //:087: Return (Fulfillment)
  public const int C_BUZ_EQU_SELL                      = 88;                                                                                         //:088: VENDOR (Owner) + AGENT (Seller, Manufacturing, Overhead)
  public const int C_BUZ_EQU_BUY                       = 89;                                                                                         //:089: CLIENT (Prospect) + AGENT (Buyer)
  public const int C_BUZ_EQU_MAKE                      = 90;                                                                                         //:090: (BOM + BOO) + AGENT (Manufacturing)
  public const int C_BUZ_EQU_USE                       = 91;                                                                                         //:091: INVENTORY + AGENT (Manufacturing, Overhead)
  public const int C_BUZ_EQU_SYSTEM                    = 92;                                                                                         //:092: Automation (Scale, Speed)
  public const int C_BUZ_EQU_DEFAULT                   = 93;                                                                                         //:093: Automation (Scale, Speed)
  public const int C_BUZ_EQU_OPTION                    = 94;                                                                                         //:094: Automation (Scale, Speed)
  public const int C_BUZ_EQU_USER                      = 95;                                                                                         //:095: Automation (Scale, Speed)
  public const int C_BUZ_EQU_SEARCH                    = 96;                                                                                         //:096: Automation (Scale, Speed)
  public const int C_BUZ_EQU_NOTE                      = 97;                                                                                         //:097: Automation (Scale, Speed)
  public const int C_BUZ_EQU_LAST                      = 98;                                                                                         //:098: Last Entry
  #endregion EQUATES
  //
  #region VALUES
  //                                                      1234567890123456
  public const string C_BUZ_VAL_FIRST                  = "----------------";                                                                         //:001: First Entry
  public const string C_BUZ_VAL_STARSYSTEM             = "STARSYSTEM";                                                                               //:002: Starzation (Sales) (Origin Star System)
  public const string C_BUZ_VAL_PLANETARYBODIES        = "PLANETARYBODIES";                                                                          //:003: Planetization (Sales) (Earth, Moon, Mars, Asteroids)
  public const string C_BUZ_VAL_CONTINENT              = "CONTINENT";                                                                                //:004: Internationalization (Sales)
  public const string C_BUZ_VAL_CONTINENTAREA          = "CONTINENTAREA";                                                                            //:005: Internationalization (Sales)
  public const string C_BUZ_VAL_COUNTRY                = "COUNTRY";                                                                                  //:006: Internationalization (Sales)
  public const string C_BUZ_VAL_STATES                 = "STATES";                                                                                   //:007: Internationalization (Sales)
  public const string C_BUZ_VAL_COUNTY                 = "COUNTY";                                                                                   //:008: Internationalization (Sales)
  public const string C_BUZ_VAL_CITY                   = "CITY";                                                                                     //:009: Internationalization (Sales)
  public const string C_BUZ_VAL_LANGUAGE               = "LANGUAGE";                                                                                 //:010: Internationalization (Sales)
  public const string C_BUZ_VAL_CURRENCY               = "CURRENCY";                                                                                 //:011: Internationalization (Sales)
  public const string C_BUZ_VAL_CALENDAR               = "CALENDAR";                                                                                 //:012: Internationalization (Sales)
  public const string C_BUZ_VAL_TIMEZONE               = "TIMEZONE";                                                                                 //:013: Internationalization (Sales)
  public const string C_BUZ_VAL_MEASURE                = "MEASURE";                                                                                  //:014: Internationalization (Sales)
  public const string C_BUZ_VAL_CULTURE                = "CULTURE";                                                                                  //:015: Internationalization (Sales)
  public const string C_BUZ_VAL_POLITICAL              = "POLITICAL";                                                                                //:016: Internationalization (Sales)
  public const string C_BUZ_VAL_LOCATION               = "LOCATION";                                                                                 //:017: Internationalization (Sales) (Latitude,Longitude,Altitude)
  public const string C_BUZ_VAL_IDENTITY               = "IDENTITY";                                                                                 //:018: Country Formats (Sales)
  public const string C_BUZ_VAL_NAME                   = "NAME";                                                                                     //:019: Country Formats (Sales)
  public const string C_BUZ_VAL_ADDRESS                = "ADDRESS";                                                                                  //:020: Country Formats (Sales)
  public const string C_BUZ_VAL_POSTALCODE             = "POSTALCODE";                                                                               //:021: Country Formats (Sales)
  public const string C_BUZ_VAL_PARTY                  = "PARTY";                                                                                    //:022: Country Formats (Sales)
  public const string C_BUZ_VAL_AGENT                  = "AGENT";                                                                                    //:023: Sales Person, Employee, Manager, Owner, Robot, etc (Sales, Manufacturing, Overhead)
  public const string C_BUZ_VAL_COMMUNICATION          = "COMMUNICATION";                                                                            //:024: Communication (Everything)
  public const string C_BUZ_VAL_ENTITY                 = "ENTITY";                                                                                   //:025: EMS: Entity Management System (Enterprise Management System) (Assets,Liabilities)
  public const string C_BUZ_VAL_GOVERNMENT             = "GOVERNMENT";                                                                               //:026: GMS: Government Management System (Taxes, Everything)
  public const string C_BUZ_VAL_MARKETING              = "MARKETING";                                                                                //:027: MMS: Marketing Management System (Development, Retention, Pricing, Costing, Sales)
  public const string C_BUZ_VAL_CLIENT                 = "CLIENT";                                                                                   //:028: CMS: Client Management System (Income)
  public const string C_BUZ_VAL_VENDOR                 = "VENDOR";                                                                                   //:029: VMS: Vendor Management System (Expenses)
  public const string C_BUZ_VAL_SHIPPER                = "SHIPPER";                                                                                  //:030: SMS: Shipper Management System (Income/Expenses)
  public const string C_BUZ_VAL_FBS                    = "FBS";                                                                                      //:031: Financial Balance Sheet (Assets - Liabilities = Equity | Health)
  public const string C_BUZ_VAL_FPL                    = "FPL";                                                                                      //:032: Financial Profit & Loss (Income - Expenses = Net Profit | Cash Flow)
  public const string C_BUZ_VAL_KPICOUNTRY             = "KPICOUNTRY";                                                                               //:033: Key Performance Indicators (Country Level Markets and Financials)
  public const string C_BUZ_VAL_KPIMARKETS             = "KPIMARKETS";                                                                               //:034: Key Performance Indicators (Industry Level Markets and Financials)
  public const string C_BUZ_VAL_KPICOMPANY             = "KPICOMPANY";                                                                               //:035: Key Performance Indicators (Health Checkup | Cash Flow Checkup)
  public const string C_BUZ_VAL_KPIEMPLOYEES           = "KPIEMPLOYEES";                                                                             //:036: Key Performance Indicators (Employee Satisfaction | Health)
  public const string C_BUZ_VAL_KPICUSTOMERS           = "KPICUSTOMERS";                                                                             //:037: Key Performance Indicators (Customer Satisfaction | Health)
  public const string C_BUZ_VAL_KPIPROCESSES           = "KPIPROCESSES";                                                                             //:038: Key Performance Indicators (Internal Processes | Health)
  public const string C_BUZ_VAL_KPIFINANCIAL           = "KPIFINANCIAL";                                                                             //:039: Key Performance Indicators (Financial Processes | Health | Cash Flow)
  public const string C_BUZ_VAL_MACHINE                = "MACHINE";                                                                                  //:040: Machine (Manufacturing)
  public const string C_BUZ_VAL_TOOL                   = "TOOL";                                                                                     //:041: Tool (Manufacturing)
  public const string C_BUZ_VAL_GAGE                   = "GAGE";                                                                                     //:042: Gage (Manufacturing)
  public const string C_BUZ_VAL_TRUCK                  = "TRUCK";                                                                                    //:043: Truck (Fulfillment)
  public const string C_BUZ_VAL_SERVICE                = "SERVICE";                                                                                  //:044: Service Items (Sales, Material, Time, Manufacturing)
  public const string C_BUZ_VAL_INVENTORY              = "INVENTORY";                                                                                //:045: Inventory Items (Sales, Material, Manufacturing)
  public const string C_BUZ_VAL_SUPPLY                 = "SUPPLY";                                                                                   //:046: Consumable Items (Sales, Manufacturing, Overhead)
  public const string C_BUZ_VAL_WAREHOUSE              = "WAREHOUSE";                                                                                //:047: Storage of Items (Sales, Material, Manufacturing, Overhead)
  public const string C_BUZ_VAL_PRICING                = "PRICING";                                                                                  //:048: Historical Goods, Services, and Inventory Pricing (Sales)
  public const string C_BUZ_VAL_COSTING                = "COSTING";                                                                                  //:049: Historical Goods, Services, and Inventory Costing (Sales)
  public const string C_BUZ_VAL_DOCUMENT               = "DOCUMENT";                                                                                 //:050: Contracts (Sales), Certificates (Manufacturing)
  public const string C_BUZ_VAL_IMAGE                  = "IMAGE";                                                                                    //:051: Contracts (Sales), Certificates (Manufacturing)
  public const string C_BUZ_VAL_SCHEMATIC              = "SCHEMATIC";                                                                                //:052: Diagram, Drawing, Plan, Blueprint (Sales, Manufacturing)
  public const string C_BUZ_VAL_RFI                    = "RFI";                                                                                      //:053: Request For Information (Sales)
  public const string C_BUZ_VAL_RFIHEADER              = "RFIHEADER";                                                                                //:054: Request For Information
  public const string C_BUZ_VAL_RFIDETAIL              = "RFIDETIAL";                                                                                //:055: Request For Information
  public const string C_BUZ_VAL_RFP                    = "RFP";                                                                                      //:056: Request For Proposal (Sales)
  public const string C_BUZ_VAL_RFPHEADER              = "RFPHEADER";                                                                                //:057: Request For Proposal
  public const string C_BUZ_VAL_RFPDETAIL              = "RFPDETAIL";                                                                                //:058: Request For Proposal
  public const string C_BUZ_VAL_RFQ                    = "RFQ";                                                                                      //:059: Request For Quote (Sales)
  public const string C_BUZ_VAL_RFQHEADER              = "RFQHEADER";                                                                                //:060: Request For Quote
  public const string C_BUZ_VAL_RFQDETAIL              = "RFQDETAIL";                                                                                //:061: Request For Quote
  public const string C_BUZ_VAL_RFO                    = "RFO";                                                                                      //:062: Request For Order (Sales)
  public const string C_BUZ_VAL_RFOHEADER              = "RFOHEADER";                                                                                //:063: Request For Order
  public const string C_BUZ_VAL_RFODETAIL              = "RFODETAIL";                                                                                //:064: Request For Order
  public const string C_BUZ_VAL_RFW                    = "RFW";                                                                                      //:065: Request For Work (Service, Product)
  public const string C_BUZ_VAL_RFWHEADER              = "RFWHEADER";                                                                                //:066: Request For Work
  public const string C_BUZ_VAL_RFWDETAIL              = "RFWDETAIL";                                                                                //:067: Request For Work
  public const string C_BUZ_VAL_RFB                    = "RFB";                                                                                      //:068: Request For Bill (Financial Processes)
  public const string C_BUZ_VAL_RFBHEADER              = "RFBHEADER";                                                                                //:069: Request For Bill
  public const string C_BUZ_VAL_RFBDETAIL              = "RFBDETAIL";                                                                                //:070: Request For Bill
  public const string C_BUZ_VAL_RFA                    = "RFA";                                                                                      //:071: Request For Payment (Financial Processes)
  public const string C_BUZ_VAL_RFAHEADER              = "RFAHEADER";                                                                                //:072: Request For Payment
  public const string C_BUZ_VAL_RFADETAIL              = "RFADETAIL";                                                                                //:073: Request For Payment
  public const string C_BUZ_VAL_RFC                    = "RFC";                                                                                      //:074: Request For Collection (Financial Processes)
  public const string C_BUZ_VAL_RFCHEADER              = "RFCHEADER";                                                                                //:075: Request For Collection
  public const string C_BUZ_VAL_RFCDETAIL              = "RFCDETAIL";                                                                                //:076: Request For Collection
  public const string C_BUZ_VAL_BOM                    = "BOM";                                                                                      //:077: Bill Of Materials (Manufacturing, Service)
  public const string C_BUZ_VAL_BOMHEADER              = "BOMHEADER";                                                                                //:078: Bill Of Materials
  public const string C_BUZ_VAL_BOMDETAIL              = "BOMDETAIL";                                                                                //:079: Bill Of Materials
  public const string C_BUZ_VAL_BOO                    = "BOO";                                                                                      //:080: Bill Of Operations (Manufacturing, Service)
  public const string C_BUZ_VAL_BOOHEADER              = "BOOHEADER";                                                                                //:081: Bill Of Operations
  public const string C_BUZ_VAL_BOODETAIL              = "BOODETAIL";                                                                                //:082: Bill Of Operations
  public const string C_BUZ_VAL_QUALITY                = "QUALITY";                                                                                  //:083: Quality Control (Material, Manufacturing)
  public const string C_BUZ_VAL_PICKING                = "PICKING";                                                                                  //:084: Picking (Fulfillment)
  public const string C_BUZ_VAL_PACKING                = "PACKING";                                                                                  //:085: Packing (Fulfillment)
  public const string C_BUZ_VAL_SHIPPING               = "SHIPPING";                                                                                 //:086: Shipping (Fulfillment)
  public const string C_BUZ_VAL_RETURN                 = "RETURN";                                                                                   //:087: Return (Fulfillment)
  public const string C_BUZ_VAL_SELL                   = "SELL";                                                                                     //:088: VENDOR (Owner) + AGENT (Seller, Manufacturing, Overhead)
  public const string C_BUZ_VAL_BUY                    = "BUY";                                                                                      //:089: CLIENT (Prospect) + AGENT (Buyer)
  public const string C_BUZ_VAL_MAKE                   = "MAKE";                                                                                     //:090: (BOM + BOO) + AGENT (Manufacturing)
  public const string C_BUZ_VAL_USE                    = "USE";                                                                                      //:091: INVENTORY + AGENT (Manufacturing, Overhead)
  public const string C_BUZ_VAL_SYSTEM                 = "SYSTEM";                                                                                   //:092: Automation (Scale, Speed)
  public const string C_BUZ_VAL_DEFAULT                = "DEFAULT";                                                                                  //:093: Automation (Scale, Speed)
  public const string C_BUZ_VAL_OPTION                 = "OPTION";                                                                                   //:094: Automation (Scale, Speed)
  public const string C_BUZ_VAL_USER                   = "USER";                                                                                     //:095: Automation (Scale, Speed)
  public const string C_BUZ_VAL_SEARCH                 = "SEARCH";                                                                                   //:096: Automation (Scale, Speed)
  public const string C_BUZ_VAL_NOTE                   = "NOTE";                                                                                     //:097: Automation (Scale, Speed)
  public const string C_BUZ_VAL_LAST                   = "~~~~~~~~~~~~~~~~";                                                                         //:098: Last Entry
  //                                                      1234567890123456
  #endregion VALUES
  //
  #region DESCRIPTIONS
  public const string C_BUZ_DES_FIRST                  = "First Entry";                                                                              //:001: First Entry
  public const string C_BUZ_DES_STARSYSTEM             = "Starzation (Sales) (Origin Star System)";                                                  //:002: Starzation (Sales) (Origin Star System)
  public const string C_BUZ_DES_PLANETARYBODIES        = "Planetization (Sales) (Earth, Moon, Mars, Asteroids)";                                     //:003: Planetization (Sales) (Earth, Moon, Mars, Asteroids)
  public const string C_BUZ_DES_CONTINENT              = "Internationalization (Sales)";                                                             //:004: Internationalization (Sales)
  public const string C_BUZ_DES_CONTINENTAREA          = "Internationalization (Sales)";                                                             //:005: Internationalization (Sales)
  public const string C_BUZ_DES_COUNTRY                = "Internationalization (Sales)";                                                             //:006: Internationalization (Sales)
  public const string C_BUZ_DES_STATES                 = "Internationalization (Sales)";                                                             //:007: Internationalization (Sales)
  public const string C_BUZ_DES_COUNTY                 = "Internationalization (Sales)";                                                             //:008: Internationalization (Sales)
  public const string C_BUZ_DES_CITY                   = "Internationalization (Sales)";                                                             //:009: Internationalization (Sales)
  public const string C_BUZ_DES_LANGUAGE               = "Internationalization (Sales)";                                                             //:010: Internationalization (Sales)
  public const string C_BUZ_DES_CURRENCY               = "Internationalization (Sales)";                                                             //:011: Internationalization (Sales)
  public const string C_BUZ_DES_CALENDAR               = "Internationalization (Sales)";                                                             //:012: Internationalization (Sales)
  public const string C_BUZ_DES_TIMEZONE               = "Internationalization (Sales)";                                                             //:013: Internationalization (Sales)
  public const string C_BUZ_DES_MEASURE                = "Internationalization (Sales)";                                                             //:014: Internationalization (Sales)
  public const string C_BUZ_DES_CULTURE                = "Internationalization (Sales)";                                                             //:015: Internationalization (Sales)
  public const string C_BUZ_DES_POLITICAL              = "Internationalization (Sales)";                                                             //:016: Internationalization (Sales)
  public const string C_BUZ_DES_LOCATION               = "Internationalization (Sales) (Latitude,Longitude,Altitude)";                               //:017: Internationalization (Sales) (Latitude,Longitude,Altitude)
  public const string C_BUZ_DES_IDENTITY               = "Country Formats (Sales)";                                                                  //:018: Country Formats (Sales)
  public const string C_BUZ_DES_NAME                   = "Country Formats (Sales)";                                                                  //:019: Country Formats (Sales)
  public const string C_BUZ_DES_ADDRESS                = "Country Formats (Sales)";                                                                  //:020: Country Formats (Sales)
  public const string C_BUZ_DES_POSTALCODE             = "Country Formats (Sales)";                                                                  //:021: Country Formats (Sales)
  public const string C_BUZ_DES_PARTY                  = "Country Formats (Sales)";                                                                  //:022: Country Formats (Sales)
  public const string C_BUZ_DES_AGENT                  = "Sales Person, Employee, Manager, Owner, Robot, etc (Sales, Manufacturing, Overhead)";      //:023: Sales Person, Employee, Manager, Owner, Robot, etc (Sales, Manufacturing, Overhead)
  public const string C_BUZ_DES_COMMUNICATION          = "Communication (Everything)";                                                               //:024: Communication (Everything)
  public const string C_BUZ_DES_ENTITY                 = "EMS: Entity Management System (Enterprise Management System) (Assets,Liabilities)";        //:025: EMS: Entity Management System (Enterprise Management System) (Assets,Liabilities)
  public const string C_BUZ_DES_GOVERNMENT             = "GMS: Government Management System (Taxes, Everything)";                                    //:026: GMS: Government Management System (Taxes, Everything)
  public const string C_BUZ_DES_MARKETING              = "MMS: Marketing Management System (Development, Retention, Pricing, Costing, Sales)";       //:027: MMS: Marketing Management System (Development, Retention, Pricing, Costing, Sales)
  public const string C_BUZ_DES_CLIENT                 = "CMS: Client Management System (Income)";                                                   //:028: CMS: Client Management System (Income)
  public const string C_BUZ_DES_VENDOR                 = "VMS: Vendor Management System (Expenses)";                                                 //:029: VMS: Vendor Management System (Expenses)
  public const string C_BUZ_DES_SHIPPER                = "SMS: Shipper Management System (Income/Expenses)";                                         //:030: SMS: Shipper Management System (Income/Expenses)
  public const string C_BUZ_DES_FBS                    = "Financial Balance Sheet (Assets - Liabilities = Equity | Health)";                         //:031: Financial Balance Sheet (Assets - Liabilities = Equity | Health)
  public const string C_BUZ_DES_FPL                    = "Financial Profit & Loss (Income - Expenses = Net Profit | Cash Flow)";                     //:032: Financial Profit & Loss (Income - Expenses = Net Profit | Cash Flow)
  public const string C_BUZ_DES_KPICOUNTRY             = "Key Performance Indicators (Country Level Markets and Financials)";                        //:033: Key Performance Indicators (Country Level Markets and Financials)
  public const string C_BUZ_DES_KPIMARKETS             = "Key Performance Indicators (Industry Level Markets and Financials)";                       //:034: Key Performance Indicators (Industry Level Markets and Financials)
  public const string C_BUZ_DES_KPICOMPANY             = "Key Performance Indicators (Health Checkup | Cash Flow Checkup)";                          //:035: Key Performance Indicators (Health Checkup | Cash Flow Checkup)
  public const string C_BUZ_DES_KPIEMPLOYEES           = "Key Performance Indicators (Employee Satisfaction | Health)";                              //:036: Key Performance Indicators (Employee Satisfaction | Health)
  public const string C_BUZ_DES_KPICUSTOMERS           = "Key Performance Indicators (Customer Satisfaction | Health)";                              //:037: Key Performance Indicators (Customer Satisfaction | Health)
  public const string C_BUZ_DES_KPIPROCESSES           = "Key Performance Indicators (Internal Processes | Health)";                                 //:038: Key Performance Indicators (Internal Processes | Health)
  public const string C_BUZ_DES_KPIFINANCIAL           = "Key Performance Indicators (Financial Processes | Health | Cash Flow)";                    //:039: Key Performance Indicators (Financial Processes | Health | Cash Flow)
  public const string C_BUZ_DES_MACHINE                = "Machine (Manufacturing)";                                                                  //:040: Machine (Manufacturing)
  public const string C_BUZ_DES_TOOL                   = "Tool (Manufacturing)";                                                                     //:041: Tool (Manufacturing)
  public const string C_BUZ_DES_GAGE                   = "Gage (Manufacturing)";                                                                     //:042: Gage (Manufacturing)
  public const string C_BUZ_DES_TRUCK                  = "Truck (Fulfillment)";                                                                      //:043: Truck (Fulfillment)
  public const string C_BUZ_DES_SERVICE                = "Service Items (Sales, Material, Time, Manufacturing)";                                     //:044: Service Items (Sales, Material, Time, Manufacturing)
  public const string C_BUZ_DES_INVENTORY              = "Inventory Items (Sales, Material, Manufacturing)";                                         //:045: Inventory Items (Sales, Material, Manufacturing)
  public const string C_BUZ_DES_SUPPLY                 = "Consumable Items (Sales, Manufacturing, Overhead)";                                        //:046: Consumable Items (Sales, Manufacturing, Overhead)
  public const string C_BUZ_DES_WAREHOUSE              = "Storage of Items (Sales, Material, Manufacturing, Overhead)";                              //:047: Storage of Items (Sales, Material, Manufacturing, Overhead)
  public const string C_BUZ_DES_PRICING                = "Historical Goods, Services, and Inventory Pricing (Sales)";                                //:048: Historical Goods, Services, and Inventory Pricing (Sales)
  public const string C_BUZ_DES_COSTING                = "Historical Goods, Services, and Inventory Costing (Sales)";                                //:049: Historical Goods, Services, and Inventory Costing (Sales)
  public const string C_BUZ_DES_DOCUMENT               = "Contracts (Sales), Certificates (Manufacturing)";                                          //:050: Contracts (Sales), Certificates (Manufacturing)
  public const string C_BUZ_DES_IMAGE                  = "Contracts (Sales), Certificates (Manufacturing)";                                          //:051: Contracts (Sales), Certificates (Manufacturing)
  public const string C_BUZ_DES_SCHEMATIC              = "Diagram, Drawing, Plan, Blueprint (Sales, Manufacturing)";                                 //:052: Diagram, Drawing, Plan, Blueprint (Sales, Manufacturing)
  public const string C_BUZ_DES_RFI                    = "Request For Information (Sales)";                                                          //:053: Request For Information (Sales)
  public const string C_BUZ_DES_RFIHEADER              = "Request For Information";                                                                  //:054: Request For Information
  public const string C_BUZ_DES_RFIDETAIL              = "Request For Information";                                                                  //:055: Request For Information
  public const string C_BUZ_DES_RFP                    = "Request For Proposal (Sales)";                                                             //:056: Request For Proposal (Sales)
  public const string C_BUZ_DES_RFPHEADER              = "Request For Proposal";                                                                     //:057: Request For Proposal
  public const string C_BUZ_DES_RFPDETAIL              = "Request For Proposal";                                                                     //:058: Request For Proposal
  public const string C_BUZ_DES_RFQ                    = "Request For Quote (Sales)";                                                                //:059: Request For Quote (Sales)
  public const string C_BUZ_DES_RFQHEADER              = "Request For Quote";                                                                        //:060: Request For Quote
  public const string C_BUZ_DES_RFQDETAIL              = "Request For Quote";                                                                        //:061: Request For Quote
  public const string C_BUZ_DES_RFO                    = "Request For Order (Sales)";                                                                //:062: Request For Order (Sales)
  public const string C_BUZ_DES_RFOHEADER              = "Request For Order";                                                                        //:063: Request For Order
  public const string C_BUZ_DES_RFODETAIL              = "Request For Order";                                                                        //:064: Request For Order
  public const string C_BUZ_DES_RFW                    = "Request For Work (Service, Product)";                                                      //:065: Request For Work (Service, Product)
  public const string C_BUZ_DES_RFWHEADER              = "Request For Work";                                                                         //:066: Request For Work
  public const string C_BUZ_DES_RFWDETAIL              = "Request For Work";                                                                         //:067: Request For Work
  public const string C_BUZ_DES_RFB                    = "Request For Bill (Financial Processes)";                                                   //:068: Request For Bill (Financial Processes)
  public const string C_BUZ_DES_RFBHEADER              = "Request For Bill";                                                                         //:069: Request For Bill
  public const string C_BUZ_DES_RFBDETAIL              = "Request For Bill";                                                                         //:070: Request For Bill
  public const string C_BUZ_DES_RFA                    = "Request For Payment (Financial Processes)";                                                //:071: Request For Payment (Financial Processes)
  public const string C_BUZ_DES_RFAHEADER              = "Request For Payment";                                                                      //:072: Request For Payment
  public const string C_BUZ_DES_RFADETAIL              = "Request For Payment";                                                                      //:073: Request For Payment
  public const string C_BUZ_DES_RFC                    = "Request For Collection (Financial Processes)";                                             //:074: Request For Collection (Financial Processes)
  public const string C_BUZ_DES_RFCHEADER              = "Request For Collection";                                                                   //:075: Request For Collection
  public const string C_BUZ_DES_RFCDETAIL              = "Request For Collection";                                                                   //:076: Request For Collection
  public const string C_BUZ_DES_BOM                    = "Bill Of Materials (Manufacturing, Service)";                                               //:077: Bill Of Materials (Manufacturing, Service)
  public const string C_BUZ_DES_BOMHEADER              = "Bill Of Materials";                                                                        //:078: Bill Of Materials
  public const string C_BUZ_DES_BOMDETAIL              = "Bill Of Materials";                                                                        //:079: Bill Of Materials
  public const string C_BUZ_DES_BOO                    = "Bill Of Operations (Manufacturing, Service)";                                              //:080: Bill Of Operations (Manufacturing, Service)
  public const string C_BUZ_DES_BOOHEADER              = "Bill Of Operations";                                                                       //:081: Bill Of Operations
  public const string C_BUZ_DES_BOODETAIL              = "Bill Of Operations";                                                                       //:082: Bill Of Operations
  public const string C_BUZ_DES_QUALITY                = "Quality Control (Material, Manufacturing)";                                                //:083: Quality Control (Material, Manufacturing)
  public const string C_BUZ_DES_PICKING                = "Picking (Fulfillment)";                                                                    //:084: Picking (Fulfillment)
  public const string C_BUZ_DES_PACKING                = "Packing (Fulfillment)";                                                                    //:085: Packing (Fulfillment)
  public const string C_BUZ_DES_SHIPPING               = "Shipping (Fulfillment)";                                                                   //:086: Shipping (Fulfillment)
  public const string C_BUZ_DES_RETURN                 = "Return (Fulfillment)";                                                                     //:087: Return (Fulfillment)
  public const string C_BUZ_DES_SELL                   = "VENDOR (Owner) + AGENT (Seller, Manufacturing, Overhead)";                                 //:088: VENDOR (Owner) + AGENT (Seller, Manufacturing, Overhead)
  public const string C_BUZ_DES_BUY                    = "CLIENT (Prospect) + AGENT (Buyer)";                                                        //:089: CLIENT (Prospect) + AGENT (Buyer)
  public const string C_BUZ_DES_MAKE                   = "(BOM + BOO) + AGENT (Manufacturing)";                                                      //:090: (BOM + BOO) + AGENT (Manufacturing)
  public const string C_BUZ_DES_USE                    = "INVENTORY + AGENT (Manufacturing, Overhead)";                                              //:091: INVENTORY + AGENT (Manufacturing, Overhead)
  public const string C_BUZ_DES_SYSTEM                 = "Automation (Scale, Speed)";                                                                //:092: Automation (Scale, Speed)
  public const string C_BUZ_DES_DEFAULT                = "Automation (Scale, Speed)";                                                                //:093: Automation (Scale, Speed)
  public const string C_BUZ_DES_OPTION                 = "Automation (Scale, Speed)";                                                                //:094: Automation (Scale, Speed)
  public const string C_BUZ_DES_USER                   = "Automation (Scale, Speed)";                                                                //:095: Automation (Scale, Speed)
  public const string C_BUZ_DES_SEARCH                 = "Automation (Scale, Speed)";                                                                //:096: Automation (Scale, Speed)
  public const string C_BUZ_DES_NOTE                   = "Automation (Scale, Speed)";                                                                //:097: Automation (Scale, Speed)
  public const string C_BUZ_DES_LAST                   = "Last Entry";                                                                               //:098: Last Entry
  #endregion DESCRIPTIONS
  //
  //EOF
