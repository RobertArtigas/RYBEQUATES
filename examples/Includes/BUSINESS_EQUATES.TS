  //BOF
  //
  // File:         ..\Includes\Temp\BUSINESS_EQUATES.TS
  // Date-Time:    2025/06/13 - 08:49:51PM
  // Purpose:      Define global equates for applications
  // Author:       Copyright © 2018-2025 by Roberto Artigas y Soler
  //               All Rights Reserved World Wide.
  //               Commercial License and non-disclosure agreement required for use.
  //
  // -----------------------------------------------------------------
  // -----------------------------------------------------------------
  // The EQUATES ---might--- have cross uses in other areas in the system.
  // IMPORTANT: Please NOTE that the equates are syncronized up in the same order.
  // -----------------------------------------------------------------
  // -----------------------------------------------------------------
  //
  //#region EQUATES
  export const C_BUZ_EQU_FIRST: number                 = 1;                                                                                          //:001: First Entry
  export const C_BUZ_EQU_STARSYSTEM: number            = 2;                                                                                          //:002: Starzation (Sales) (Origin Star System)
  export const C_BUZ_EQU_PLANETARYBODIES: number       = 3;                                                                                          //:003: Planetization (Sales) (Earth, Moon, Mars, Asteroids)
  export const C_BUZ_EQU_CONTINENT: number             = 4;                                                                                          //:004: Internationalization (Sales)
  export const C_BUZ_EQU_CONTINENTAREA: number         = 5;                                                                                          //:005: Internationalization (Sales)
  export const C_BUZ_EQU_COUNTRY: number               = 6;                                                                                          //:006: Internationalization (Sales)
  export const C_BUZ_EQU_STATES: number                = 7;                                                                                          //:007: Internationalization (Sales)
  export const C_BUZ_EQU_COUNTY: number                = 8;                                                                                          //:008: Internationalization (Sales)
  export const C_BUZ_EQU_CITY: number                  = 9;                                                                                          //:009: Internationalization (Sales)
  export const C_BUZ_EQU_LANGUAGE: number              = 10;                                                                                         //:010: Internationalization (Sales)
  export const C_BUZ_EQU_CURRENCY: number              = 11;                                                                                         //:011: Internationalization (Sales)
  export const C_BUZ_EQU_CALENDAR: number              = 12;                                                                                         //:012: Internationalization (Sales)
  export const C_BUZ_EQU_TIMEZONE: number              = 13;                                                                                         //:013: Internationalization (Sales)
  export const C_BUZ_EQU_MEASURE: number               = 14;                                                                                         //:014: Internationalization (Sales)
  export const C_BUZ_EQU_CULTURE: number               = 15;                                                                                         //:015: Internationalization (Sales)
  export const C_BUZ_EQU_POLITICAL: number             = 16;                                                                                         //:016: Internationalization (Sales)
  export const C_BUZ_EQU_LOCATION: number              = 17;                                                                                         //:017: Internationalization (Sales) (Latitude,Longitude,Altitude)
  export const C_BUZ_EQU_IDENTITY: number              = 18;                                                                                         //:018: Country Formats (Sales)
  export const C_BUZ_EQU_NAME: number                  = 19;                                                                                         //:019: Country Formats (Sales)
  export const C_BUZ_EQU_ADDRESS: number               = 20;                                                                                         //:020: Country Formats (Sales)
  export const C_BUZ_EQU_POSTALCODE: number            = 21;                                                                                         //:021: Country Formats (Sales)
  export const C_BUZ_EQU_PARTY: number                 = 22;                                                                                         //:022: Country Formats (Sales)
  export const C_BUZ_EQU_AGENT: number                 = 23;                                                                                         //:023: Sales Person, Employee, Manager, Owner, Robot, etc (Sales, Manufacturing, Overhead)
  export const C_BUZ_EQU_COMMUNICATION: number         = 24;                                                                                         //:024: Communication (Everything)
  export const C_BUZ_EQU_ENTITY: number                = 25;                                                                                         //:025: EMS: Entity Management System (Enterprise Management System) (Assets,Liabilities)
  export const C_BUZ_EQU_GOVERNMENT: number            = 26;                                                                                         //:026: GMS: Government Management System (Taxes, Everything)
  export const C_BUZ_EQU_MARKETING: number             = 27;                                                                                         //:027: MMS: Marketing Management System (Development, Retention, Pricing, Costing, Sales)
  export const C_BUZ_EQU_CLIENT: number                = 28;                                                                                         //:028: CMS: Client Management System (Income)
  export const C_BUZ_EQU_VENDOR: number                = 29;                                                                                         //:029: VMS: Vendor Management System (Expenses)
  export const C_BUZ_EQU_SHIPPER: number               = 30;                                                                                         //:030: SMS: Shipper Management System (Income/Expenses)
  export const C_BUZ_EQU_FBS: number                   = 31;                                                                                         //:031: Financial Balance Sheet (Assets - Liabilities = Equity | Health)
  export const C_BUZ_EQU_FPL: number                   = 32;                                                                                         //:032: Financial Profit & Loss (Income - Expenses = Net Profit | Cash Flow)
  export const C_BUZ_EQU_KPICOUNTRY: number            = 33;                                                                                         //:033: Key Performance Indicators (Country Level Markets and Financials)
  export const C_BUZ_EQU_KPIMARKETS: number            = 34;                                                                                         //:034: Key Performance Indicators (Industry Level Markets and Financials)
  export const C_BUZ_EQU_KPICOMPANY: number            = 35;                                                                                         //:035: Key Performance Indicators (Health Checkup | Cash Flow Checkup)
  export const C_BUZ_EQU_KPIEMPLOYEES: number          = 36;                                                                                         //:036: Key Performance Indicators (Employee Satisfaction | Health)
  export const C_BUZ_EQU_KPICUSTOMERS: number          = 37;                                                                                         //:037: Key Performance Indicators (Customer Satisfaction | Health)
  export const C_BUZ_EQU_KPIPROCESSES: number          = 38;                                                                                         //:038: Key Performance Indicators (Internal Processes | Health)
  export const C_BUZ_EQU_KPIFINANCIAL: number          = 39;                                                                                         //:039: Key Performance Indicators (Financial Processes | Health | Cash Flow)
  export const C_BUZ_EQU_MACHINE: number               = 40;                                                                                         //:040: Machine (Manufacturing)
  export const C_BUZ_EQU_TOOL: number                  = 41;                                                                                         //:041: Tool (Manufacturing)
  export const C_BUZ_EQU_GAGE: number                  = 42;                                                                                         //:042: Gage (Manufacturing)
  export const C_BUZ_EQU_TRUCK: number                 = 43;                                                                                         //:043: Truck (Fulfillment)
  export const C_BUZ_EQU_SERVICE: number               = 44;                                                                                         //:044: Service Items (Sales, Material, Time, Manufacturing)
  export const C_BUZ_EQU_INVENTORY: number             = 45;                                                                                         //:045: Inventory Items (Sales, Material, Manufacturing)
  export const C_BUZ_EQU_SUPPLY: number                = 46;                                                                                         //:046: Consumable Items (Sales, Manufacturing, Overhead)
  export const C_BUZ_EQU_WAREHOUSE: number             = 47;                                                                                         //:047: Storage of Items (Sales, Material, Manufacturing, Overhead)
  export const C_BUZ_EQU_PRICING: number               = 48;                                                                                         //:048: Historical Goods, Services, and Inventory Pricing (Sales)
  export const C_BUZ_EQU_COSTING: number               = 49;                                                                                         //:049: Historical Goods, Services, and Inventory Costing (Sales)
  export const C_BUZ_EQU_DOCUMENT: number              = 50;                                                                                         //:050: Contracts (Sales), Certificates (Manufacturing)
  export const C_BUZ_EQU_IMAGE: number                 = 51;                                                                                         //:051: Contracts (Sales), Certificates (Manufacturing)
  export const C_BUZ_EQU_SCHEMATIC: number             = 52;                                                                                         //:052: Diagram, Drawing, Plan, Blueprint (Sales, Manufacturing)
  export const C_BUZ_EQU_RFI: number                   = 53;                                                                                         //:053: Request For Information (Sales)
  export const C_BUZ_EQU_RFIHEADER: number             = 54;                                                                                         //:054: Request For Information
  export const C_BUZ_EQU_RFIDETAIL: number             = 55;                                                                                         //:055: Request For Information
  export const C_BUZ_EQU_RFP: number                   = 56;                                                                                         //:056: Request For Proposal (Sales)
  export const C_BUZ_EQU_RFPHEADER: number             = 57;                                                                                         //:057: Request For Proposal
  export const C_BUZ_EQU_RFPDETAIL: number             = 58;                                                                                         //:058: Request For Proposal
  export const C_BUZ_EQU_RFQ: number                   = 59;                                                                                         //:059: Request For Quote (Sales)
  export const C_BUZ_EQU_RFQHEADER: number             = 60;                                                                                         //:060: Request For Quote
  export const C_BUZ_EQU_RFQDETAIL: number             = 61;                                                                                         //:061: Request For Quote
  export const C_BUZ_EQU_RFO: number                   = 62;                                                                                         //:062: Request For Order (Sales)
  export const C_BUZ_EQU_RFOHEADER: number             = 63;                                                                                         //:063: Request For Order
  export const C_BUZ_EQU_RFODETAIL: number             = 64;                                                                                         //:064: Request For Order
  export const C_BUZ_EQU_RFW: number                   = 65;                                                                                         //:065: Request For Work (Service, Product)
  export const C_BUZ_EQU_RFWHEADER: number             = 66;                                                                                         //:066: Request For Work
  export const C_BUZ_EQU_RFWDETAIL: number             = 67;                                                                                         //:067: Request For Work
  export const C_BUZ_EQU_RFB: number                   = 68;                                                                                         //:068: Request For Bill (Financial Processes)
  export const C_BUZ_EQU_RFBHEADER: number             = 69;                                                                                         //:069: Request For Bill
  export const C_BUZ_EQU_RFBDETAIL: number             = 70;                                                                                         //:070: Request For Bill
  export const C_BUZ_EQU_RFA: number                   = 71;                                                                                         //:071: Request For Payment (Financial Processes)
  export const C_BUZ_EQU_RFAHEADER: number             = 72;                                                                                         //:072: Request For Payment
  export const C_BUZ_EQU_RFADETAIL: number             = 73;                                                                                         //:073: Request For Payment
  export const C_BUZ_EQU_RFC: number                   = 74;                                                                                         //:074: Request For Collection (Financial Processes)
  export const C_BUZ_EQU_RFCHEADER: number             = 75;                                                                                         //:075: Request For Collection
  export const C_BUZ_EQU_RFCDETAIL: number             = 76;                                                                                         //:076: Request For Collection
  export const C_BUZ_EQU_BOM: number                   = 77;                                                                                         //:077: Bill Of Materials (Manufacturing, Service)
  export const C_BUZ_EQU_BOMHEADER: number             = 78;                                                                                         //:078: Bill Of Materials
  export const C_BUZ_EQU_BOMDETAIL: number             = 79;                                                                                         //:079: Bill Of Materials
  export const C_BUZ_EQU_BOO: number                   = 80;                                                                                         //:080: Bill Of Operations (Manufacturing, Service)
  export const C_BUZ_EQU_BOOHEADER: number             = 81;                                                                                         //:081: Bill Of Operations
  export const C_BUZ_EQU_BOODETAIL: number             = 82;                                                                                         //:082: Bill Of Operations
  export const C_BUZ_EQU_QUALITY: number               = 83;                                                                                         //:083: Quality Control (Material, Manufacturing)
  export const C_BUZ_EQU_PICKING: number               = 84;                                                                                         //:084: Picking (Fulfillment)
  export const C_BUZ_EQU_PACKING: number               = 85;                                                                                         //:085: Packing (Fulfillment)
  export const C_BUZ_EQU_SHIPPING: number              = 86;                                                                                         //:086: Shipping (Fulfillment)
  export const C_BUZ_EQU_RETURN: number                = 87;                                                                                         //:087: Return (Fulfillment)
  export const C_BUZ_EQU_SELL: number                  = 88;                                                                                         //:088: VENDOR (Owner) + AGENT (Seller, Manufacturing, Overhead)
  export const C_BUZ_EQU_BUY: number                   = 89;                                                                                         //:089: CLIENT (Prospect) + AGENT (Buyer)
  export const C_BUZ_EQU_MAKE: number                  = 90;                                                                                         //:090: (BOM + BOO) + AGENT (Manufacturing)
  export const C_BUZ_EQU_USE: number                   = 91;                                                                                         //:091: INVENTORY + AGENT (Manufacturing, Overhead)
  export const C_BUZ_EQU_SYSTEM: number                = 92;                                                                                         //:092: Automation (Scale, Speed)
  export const C_BUZ_EQU_DEFAULT: number               = 93;                                                                                         //:093: Automation (Scale, Speed)
  export const C_BUZ_EQU_OPTION: number                = 94;                                                                                         //:094: Automation (Scale, Speed)
  export const C_BUZ_EQU_USER: number                  = 95;                                                                                         //:095: Automation (Scale, Speed)
  export const C_BUZ_EQU_SEARCH: number                = 96;                                                                                         //:096: Automation (Scale, Speed)
  export const C_BUZ_EQU_NOTE: number                  = 97;                                                                                         //:097: Automation (Scale, Speed)
  export const C_BUZ_EQU_LAST: number                  = 98;                                                                                         //:098: Last Entry
  //#endregion EQUATES
  //
  //#region VALUES
  //                                                      1234567890123456
  export const C_BUZ_VAL_FIRST: string                 = '----------------';                                                                         //:001: First Entry
  export const C_BUZ_VAL_STARSYSTEM: string            = 'STARSYSTEM';                                                                               //:002: Starzation (Sales) (Origin Star System)
  export const C_BUZ_VAL_PLANETARYBODIES: string       = 'PLANETARYBODIES';                                                                          //:003: Planetization (Sales) (Earth, Moon, Mars, Asteroids)
  export const C_BUZ_VAL_CONTINENT: string             = 'CONTINENT';                                                                                //:004: Internationalization (Sales)
  export const C_BUZ_VAL_CONTINENTAREA: string         = 'CONTINENTAREA';                                                                            //:005: Internationalization (Sales)
  export const C_BUZ_VAL_COUNTRY: string               = 'COUNTRY';                                                                                  //:006: Internationalization (Sales)
  export const C_BUZ_VAL_STATES: string                = 'STATES';                                                                                   //:007: Internationalization (Sales)
  export const C_BUZ_VAL_COUNTY: string                = 'COUNTY';                                                                                   //:008: Internationalization (Sales)
  export const C_BUZ_VAL_CITY: string                  = 'CITY';                                                                                     //:009: Internationalization (Sales)
  export const C_BUZ_VAL_LANGUAGE: string              = 'LANGUAGE';                                                                                 //:010: Internationalization (Sales)
  export const C_BUZ_VAL_CURRENCY: string              = 'CURRENCY';                                                                                 //:011: Internationalization (Sales)
  export const C_BUZ_VAL_CALENDAR: string              = 'CALENDAR';                                                                                 //:012: Internationalization (Sales)
  export const C_BUZ_VAL_TIMEZONE: string              = 'TIMEZONE';                                                                                 //:013: Internationalization (Sales)
  export const C_BUZ_VAL_MEASURE: string               = 'MEASURE';                                                                                  //:014: Internationalization (Sales)
  export const C_BUZ_VAL_CULTURE: string               = 'CULTURE';                                                                                  //:015: Internationalization (Sales)
  export const C_BUZ_VAL_POLITICAL: string             = 'POLITICAL';                                                                                //:016: Internationalization (Sales)
  export const C_BUZ_VAL_LOCATION: string              = 'LOCATION';                                                                                 //:017: Internationalization (Sales) (Latitude,Longitude,Altitude)
  export const C_BUZ_VAL_IDENTITY: string              = 'IDENTITY';                                                                                 //:018: Country Formats (Sales)
  export const C_BUZ_VAL_NAME: string                  = 'NAME';                                                                                     //:019: Country Formats (Sales)
  export const C_BUZ_VAL_ADDRESS: string               = 'ADDRESS';                                                                                  //:020: Country Formats (Sales)
  export const C_BUZ_VAL_POSTALCODE: string            = 'POSTALCODE';                                                                               //:021: Country Formats (Sales)
  export const C_BUZ_VAL_PARTY: string                 = 'PARTY';                                                                                    //:022: Country Formats (Sales)
  export const C_BUZ_VAL_AGENT: string                 = 'AGENT';                                                                                    //:023: Sales Person, Employee, Manager, Owner, Robot, etc (Sales, Manufacturing, Overhead)
  export const C_BUZ_VAL_COMMUNICATION: string         = 'COMMUNICATION';                                                                            //:024: Communication (Everything)
  export const C_BUZ_VAL_ENTITY: string                = 'ENTITY';                                                                                   //:025: EMS: Entity Management System (Enterprise Management System) (Assets,Liabilities)
  export const C_BUZ_VAL_GOVERNMENT: string            = 'GOVERNMENT';                                                                               //:026: GMS: Government Management System (Taxes, Everything)
  export const C_BUZ_VAL_MARKETING: string             = 'MARKETING';                                                                                //:027: MMS: Marketing Management System (Development, Retention, Pricing, Costing, Sales)
  export const C_BUZ_VAL_CLIENT: string                = 'CLIENT';                                                                                   //:028: CMS: Client Management System (Income)
  export const C_BUZ_VAL_VENDOR: string                = 'VENDOR';                                                                                   //:029: VMS: Vendor Management System (Expenses)
  export const C_BUZ_VAL_SHIPPER: string               = 'SHIPPER';                                                                                  //:030: SMS: Shipper Management System (Income/Expenses)
  export const C_BUZ_VAL_FBS: string                   = 'FBS';                                                                                      //:031: Financial Balance Sheet (Assets - Liabilities = Equity | Health)
  export const C_BUZ_VAL_FPL: string                   = 'FPL';                                                                                      //:032: Financial Profit & Loss (Income - Expenses = Net Profit | Cash Flow)
  export const C_BUZ_VAL_KPICOUNTRY: string            = 'KPICOUNTRY';                                                                               //:033: Key Performance Indicators (Country Level Markets and Financials)
  export const C_BUZ_VAL_KPIMARKETS: string            = 'KPIMARKETS';                                                                               //:034: Key Performance Indicators (Industry Level Markets and Financials)
  export const C_BUZ_VAL_KPICOMPANY: string            = 'KPICOMPANY';                                                                               //:035: Key Performance Indicators (Health Checkup | Cash Flow Checkup)
  export const C_BUZ_VAL_KPIEMPLOYEES: string          = 'KPIEMPLOYEES';                                                                             //:036: Key Performance Indicators (Employee Satisfaction | Health)
  export const C_BUZ_VAL_KPICUSTOMERS: string          = 'KPICUSTOMERS';                                                                             //:037: Key Performance Indicators (Customer Satisfaction | Health)
  export const C_BUZ_VAL_KPIPROCESSES: string          = 'KPIPROCESSES';                                                                             //:038: Key Performance Indicators (Internal Processes | Health)
  export const C_BUZ_VAL_KPIFINANCIAL: string          = 'KPIFINANCIAL';                                                                             //:039: Key Performance Indicators (Financial Processes | Health | Cash Flow)
  export const C_BUZ_VAL_MACHINE: string               = 'MACHINE';                                                                                  //:040: Machine (Manufacturing)
  export const C_BUZ_VAL_TOOL: string                  = 'TOOL';                                                                                     //:041: Tool (Manufacturing)
  export const C_BUZ_VAL_GAGE: string                  = 'GAGE';                                                                                     //:042: Gage (Manufacturing)
  export const C_BUZ_VAL_TRUCK: string                 = 'TRUCK';                                                                                    //:043: Truck (Fulfillment)
  export const C_BUZ_VAL_SERVICE: string               = 'SERVICE';                                                                                  //:044: Service Items (Sales, Material, Time, Manufacturing)
  export const C_BUZ_VAL_INVENTORY: string             = 'INVENTORY';                                                                                //:045: Inventory Items (Sales, Material, Manufacturing)
  export const C_BUZ_VAL_SUPPLY: string                = 'SUPPLY';                                                                                   //:046: Consumable Items (Sales, Manufacturing, Overhead)
  export const C_BUZ_VAL_WAREHOUSE: string             = 'WAREHOUSE';                                                                                //:047: Storage of Items (Sales, Material, Manufacturing, Overhead)
  export const C_BUZ_VAL_PRICING: string               = 'PRICING';                                                                                  //:048: Historical Goods, Services, and Inventory Pricing (Sales)
  export const C_BUZ_VAL_COSTING: string               = 'COSTING';                                                                                  //:049: Historical Goods, Services, and Inventory Costing (Sales)
  export const C_BUZ_VAL_DOCUMENT: string              = 'DOCUMENT';                                                                                 //:050: Contracts (Sales), Certificates (Manufacturing)
  export const C_BUZ_VAL_IMAGE: string                 = 'IMAGE';                                                                                    //:051: Contracts (Sales), Certificates (Manufacturing)
  export const C_BUZ_VAL_SCHEMATIC: string             = 'SCHEMATIC';                                                                                //:052: Diagram, Drawing, Plan, Blueprint (Sales, Manufacturing)
  export const C_BUZ_VAL_RFI: string                   = 'RFI';                                                                                      //:053: Request For Information (Sales)
  export const C_BUZ_VAL_RFIHEADER: string             = 'RFIHEADER';                                                                                //:054: Request For Information
  export const C_BUZ_VAL_RFIDETAIL: string             = 'RFIDETIAL';                                                                                //:055: Request For Information
  export const C_BUZ_VAL_RFP: string                   = 'RFP';                                                                                      //:056: Request For Proposal (Sales)
  export const C_BUZ_VAL_RFPHEADER: string             = 'RFPHEADER';                                                                                //:057: Request For Proposal
  export const C_BUZ_VAL_RFPDETAIL: string             = 'RFPDETAIL';                                                                                //:058: Request For Proposal
  export const C_BUZ_VAL_RFQ: string                   = 'RFQ';                                                                                      //:059: Request For Quote (Sales)
  export const C_BUZ_VAL_RFQHEADER: string             = 'RFQHEADER';                                                                                //:060: Request For Quote
  export const C_BUZ_VAL_RFQDETAIL: string             = 'RFQDETAIL';                                                                                //:061: Request For Quote
  export const C_BUZ_VAL_RFO: string                   = 'RFO';                                                                                      //:062: Request For Order (Sales)
  export const C_BUZ_VAL_RFOHEADER: string             = 'RFOHEADER';                                                                                //:063: Request For Order
  export const C_BUZ_VAL_RFODETAIL: string             = 'RFODETAIL';                                                                                //:064: Request For Order
  export const C_BUZ_VAL_RFW: string                   = 'RFW';                                                                                      //:065: Request For Work (Service, Product)
  export const C_BUZ_VAL_RFWHEADER: string             = 'RFWHEADER';                                                                                //:066: Request For Work
  export const C_BUZ_VAL_RFWDETAIL: string             = 'RFWDETAIL';                                                                                //:067: Request For Work
  export const C_BUZ_VAL_RFB: string                   = 'RFB';                                                                                      //:068: Request For Bill (Financial Processes)
  export const C_BUZ_VAL_RFBHEADER: string             = 'RFBHEADER';                                                                                //:069: Request For Bill
  export const C_BUZ_VAL_RFBDETAIL: string             = 'RFBDETAIL';                                                                                //:070: Request For Bill
  export const C_BUZ_VAL_RFA: string                   = 'RFA';                                                                                      //:071: Request For Payment (Financial Processes)
  export const C_BUZ_VAL_RFAHEADER: string             = 'RFAHEADER';                                                                                //:072: Request For Payment
  export const C_BUZ_VAL_RFADETAIL: string             = 'RFADETAIL';                                                                                //:073: Request For Payment
  export const C_BUZ_VAL_RFC: string                   = 'RFC';                                                                                      //:074: Request For Collection (Financial Processes)
  export const C_BUZ_VAL_RFCHEADER: string             = 'RFCHEADER';                                                                                //:075: Request For Collection
  export const C_BUZ_VAL_RFCDETAIL: string             = 'RFCDETAIL';                                                                                //:076: Request For Collection
  export const C_BUZ_VAL_BOM: string                   = 'BOM';                                                                                      //:077: Bill Of Materials (Manufacturing, Service)
  export const C_BUZ_VAL_BOMHEADER: string             = 'BOMHEADER';                                                                                //:078: Bill Of Materials
  export const C_BUZ_VAL_BOMDETAIL: string             = 'BOMDETAIL';                                                                                //:079: Bill Of Materials
  export const C_BUZ_VAL_BOO: string                   = 'BOO';                                                                                      //:080: Bill Of Operations (Manufacturing, Service)
  export const C_BUZ_VAL_BOOHEADER: string             = 'BOOHEADER';                                                                                //:081: Bill Of Operations
  export const C_BUZ_VAL_BOODETAIL: string             = 'BOODETAIL';                                                                                //:082: Bill Of Operations
  export const C_BUZ_VAL_QUALITY: string               = 'QUALITY';                                                                                  //:083: Quality Control (Material, Manufacturing)
  export const C_BUZ_VAL_PICKING: string               = 'PICKING';                                                                                  //:084: Picking (Fulfillment)
  export const C_BUZ_VAL_PACKING: string               = 'PACKING';                                                                                  //:085: Packing (Fulfillment)
  export const C_BUZ_VAL_SHIPPING: string              = 'SHIPPING';                                                                                 //:086: Shipping (Fulfillment)
  export const C_BUZ_VAL_RETURN: string                = 'RETURN';                                                                                   //:087: Return (Fulfillment)
  export const C_BUZ_VAL_SELL: string                  = 'SELL';                                                                                     //:088: VENDOR (Owner) + AGENT (Seller, Manufacturing, Overhead)
  export const C_BUZ_VAL_BUY: string                   = 'BUY';                                                                                      //:089: CLIENT (Prospect) + AGENT (Buyer)
  export const C_BUZ_VAL_MAKE: string                  = 'MAKE';                                                                                     //:090: (BOM + BOO) + AGENT (Manufacturing)
  export const C_BUZ_VAL_USE: string                   = 'USE';                                                                                      //:091: INVENTORY + AGENT (Manufacturing, Overhead)
  export const C_BUZ_VAL_SYSTEM: string                = 'SYSTEM';                                                                                   //:092: Automation (Scale, Speed)
  export const C_BUZ_VAL_DEFAULT: string               = 'DEFAULT';                                                                                  //:093: Automation (Scale, Speed)
  export const C_BUZ_VAL_OPTION: string                = 'OPTION';                                                                                   //:094: Automation (Scale, Speed)
  export const C_BUZ_VAL_USER: string                  = 'USER';                                                                                     //:095: Automation (Scale, Speed)
  export const C_BUZ_VAL_SEARCH: string                = 'SEARCH';                                                                                   //:096: Automation (Scale, Speed)
  export const C_BUZ_VAL_NOTE: string                  = 'NOTE';                                                                                     //:097: Automation (Scale, Speed)
  export const C_BUZ_VAL_LAST: string                  = '~~~~~~~~~~~~~~~~';                                                                         //:098: Last Entry
  //                                                      1234567890123456
  //#endregion VALUES
  //
  //#region DESCRIPTIONS
  export const C_BUZ_DES_FIRST: string                 = 'First Entry';                                                                              //:001: First Entry
  export const C_BUZ_DES_STARSYSTEM: string            = 'Starzation (Sales) (Origin Star System)';                                                  //:002: Starzation (Sales) (Origin Star System)
  export const C_BUZ_DES_PLANETARYBODIES: string       = 'Planetization (Sales) (Earth, Moon, Mars, Asteroids)';                                     //:003: Planetization (Sales) (Earth, Moon, Mars, Asteroids)
  export const C_BUZ_DES_CONTINENT: string             = 'Internationalization (Sales)';                                                             //:004: Internationalization (Sales)
  export const C_BUZ_DES_CONTINENTAREA: string         = 'Internationalization (Sales)';                                                             //:005: Internationalization (Sales)
  export const C_BUZ_DES_COUNTRY: string               = 'Internationalization (Sales)';                                                             //:006: Internationalization (Sales)
  export const C_BUZ_DES_STATES: string                = 'Internationalization (Sales)';                                                             //:007: Internationalization (Sales)
  export const C_BUZ_DES_COUNTY: string                = 'Internationalization (Sales)';                                                             //:008: Internationalization (Sales)
  export const C_BUZ_DES_CITY: string                  = 'Internationalization (Sales)';                                                             //:009: Internationalization (Sales)
  export const C_BUZ_DES_LANGUAGE: string              = 'Internationalization (Sales)';                                                             //:010: Internationalization (Sales)
  export const C_BUZ_DES_CURRENCY: string              = 'Internationalization (Sales)';                                                             //:011: Internationalization (Sales)
  export const C_BUZ_DES_CALENDAR: string              = 'Internationalization (Sales)';                                                             //:012: Internationalization (Sales)
  export const C_BUZ_DES_TIMEZONE: string              = 'Internationalization (Sales)';                                                             //:013: Internationalization (Sales)
  export const C_BUZ_DES_MEASURE: string               = 'Internationalization (Sales)';                                                             //:014: Internationalization (Sales)
  export const C_BUZ_DES_CULTURE: string               = 'Internationalization (Sales)';                                                             //:015: Internationalization (Sales)
  export const C_BUZ_DES_POLITICAL: string             = 'Internationalization (Sales)';                                                             //:016: Internationalization (Sales)
  export const C_BUZ_DES_LOCATION: string              = 'Internationalization (Sales) (Latitude,Longitude,Altitude)';                               //:017: Internationalization (Sales) (Latitude,Longitude,Altitude)
  export const C_BUZ_DES_IDENTITY: string              = 'Country Formats (Sales)';                                                                  //:018: Country Formats (Sales)
  export const C_BUZ_DES_NAME: string                  = 'Country Formats (Sales)';                                                                  //:019: Country Formats (Sales)
  export const C_BUZ_DES_ADDRESS: string               = 'Country Formats (Sales)';                                                                  //:020: Country Formats (Sales)
  export const C_BUZ_DES_POSTALCODE: string            = 'Country Formats (Sales)';                                                                  //:021: Country Formats (Sales)
  export const C_BUZ_DES_PARTY: string                 = 'Country Formats (Sales)';                                                                  //:022: Country Formats (Sales)
  export const C_BUZ_DES_AGENT: string                 = 'Sales Person, Employee, Manager, Owner, Robot, etc (Sales, Manufacturing, Overhead)';      //:023: Sales Person, Employee, Manager, Owner, Robot, etc (Sales, Manufacturing, Overhead)
  export const C_BUZ_DES_COMMUNICATION: string         = 'Communication (Everything)';                                                               //:024: Communication (Everything)
  export const C_BUZ_DES_ENTITY: string                = 'EMS: Entity Management System (Enterprise Management System) (Assets,Liabilities)';        //:025: EMS: Entity Management System (Enterprise Management System) (Assets,Liabilities)
  export const C_BUZ_DES_GOVERNMENT: string            = 'GMS: Government Management System (Taxes, Everything)';                                    //:026: GMS: Government Management System (Taxes, Everything)
  export const C_BUZ_DES_MARKETING: string             = 'MMS: Marketing Management System (Development, Retention, Pricing, Costing, Sales)';       //:027: MMS: Marketing Management System (Development, Retention, Pricing, Costing, Sales)
  export const C_BUZ_DES_CLIENT: string                = 'CMS: Client Management System (Income)';                                                   //:028: CMS: Client Management System (Income)
  export const C_BUZ_DES_VENDOR: string                = 'VMS: Vendor Management System (Expenses)';                                                 //:029: VMS: Vendor Management System (Expenses)
  export const C_BUZ_DES_SHIPPER: string               = 'SMS: Shipper Management System (Income/Expenses)';                                         //:030: SMS: Shipper Management System (Income/Expenses)
  export const C_BUZ_DES_FBS: string                   = 'Financial Balance Sheet (Assets - Liabilities = Equity | Health)';                         //:031: Financial Balance Sheet (Assets - Liabilities = Equity | Health)
  export const C_BUZ_DES_FPL: string                   = 'Financial Profit & Loss (Income - Expenses = Net Profit | Cash Flow)';                     //:032: Financial Profit & Loss (Income - Expenses = Net Profit | Cash Flow)
  export const C_BUZ_DES_KPICOUNTRY: string            = 'Key Performance Indicators (Country Level Markets and Financials)';                        //:033: Key Performance Indicators (Country Level Markets and Financials)
  export const C_BUZ_DES_KPIMARKETS: string            = 'Key Performance Indicators (Industry Level Markets and Financials)';                       //:034: Key Performance Indicators (Industry Level Markets and Financials)
  export const C_BUZ_DES_KPICOMPANY: string            = 'Key Performance Indicators (Health Checkup | Cash Flow Checkup)';                          //:035: Key Performance Indicators (Health Checkup | Cash Flow Checkup)
  export const C_BUZ_DES_KPIEMPLOYEES: string          = 'Key Performance Indicators (Employee Satisfaction | Health)';                              //:036: Key Performance Indicators (Employee Satisfaction | Health)
  export const C_BUZ_DES_KPICUSTOMERS: string          = 'Key Performance Indicators (Customer Satisfaction | Health)';                              //:037: Key Performance Indicators (Customer Satisfaction | Health)
  export const C_BUZ_DES_KPIPROCESSES: string          = 'Key Performance Indicators (Internal Processes | Health)';                                 //:038: Key Performance Indicators (Internal Processes | Health)
  export const C_BUZ_DES_KPIFINANCIAL: string          = 'Key Performance Indicators (Financial Processes | Health | Cash Flow)';                    //:039: Key Performance Indicators (Financial Processes | Health | Cash Flow)
  export const C_BUZ_DES_MACHINE: string               = 'Machine (Manufacturing)';                                                                  //:040: Machine (Manufacturing)
  export const C_BUZ_DES_TOOL: string                  = 'Tool (Manufacturing)';                                                                     //:041: Tool (Manufacturing)
  export const C_BUZ_DES_GAGE: string                  = 'Gage (Manufacturing)';                                                                     //:042: Gage (Manufacturing)
  export const C_BUZ_DES_TRUCK: string                 = 'Truck (Fulfillment)';                                                                      //:043: Truck (Fulfillment)
  export const C_BUZ_DES_SERVICE: string               = 'Service Items (Sales, Material, Time, Manufacturing)';                                     //:044: Service Items (Sales, Material, Time, Manufacturing)
  export const C_BUZ_DES_INVENTORY: string             = 'Inventory Items (Sales, Material, Manufacturing)';                                         //:045: Inventory Items (Sales, Material, Manufacturing)
  export const C_BUZ_DES_SUPPLY: string                = 'Consumable Items (Sales, Manufacturing, Overhead)';                                        //:046: Consumable Items (Sales, Manufacturing, Overhead)
  export const C_BUZ_DES_WAREHOUSE: string             = 'Storage of Items (Sales, Material, Manufacturing, Overhead)';                              //:047: Storage of Items (Sales, Material, Manufacturing, Overhead)
  export const C_BUZ_DES_PRICING: string               = 'Historical Goods, Services, and Inventory Pricing (Sales)';                                //:048: Historical Goods, Services, and Inventory Pricing (Sales)
  export const C_BUZ_DES_COSTING: string               = 'Historical Goods, Services, and Inventory Costing (Sales)';                                //:049: Historical Goods, Services, and Inventory Costing (Sales)
  export const C_BUZ_DES_DOCUMENT: string              = 'Contracts (Sales), Certificates (Manufacturing)';                                          //:050: Contracts (Sales), Certificates (Manufacturing)
  export const C_BUZ_DES_IMAGE: string                 = 'Contracts (Sales), Certificates (Manufacturing)';                                          //:051: Contracts (Sales), Certificates (Manufacturing)
  export const C_BUZ_DES_SCHEMATIC: string             = 'Diagram, Drawing, Plan, Blueprint (Sales, Manufacturing)';                                 //:052: Diagram, Drawing, Plan, Blueprint (Sales, Manufacturing)
  export const C_BUZ_DES_RFI: string                   = 'Request For Information (Sales)';                                                          //:053: Request For Information (Sales)
  export const C_BUZ_DES_RFIHEADER: string             = 'Request For Information';                                                                  //:054: Request For Information
  export const C_BUZ_DES_RFIDETAIL: string             = 'Request For Information';                                                                  //:055: Request For Information
  export const C_BUZ_DES_RFP: string                   = 'Request For Proposal (Sales)';                                                             //:056: Request For Proposal (Sales)
  export const C_BUZ_DES_RFPHEADER: string             = 'Request For Proposal';                                                                     //:057: Request For Proposal
  export const C_BUZ_DES_RFPDETAIL: string             = 'Request For Proposal';                                                                     //:058: Request For Proposal
  export const C_BUZ_DES_RFQ: string                   = 'Request For Quote (Sales)';                                                                //:059: Request For Quote (Sales)
  export const C_BUZ_DES_RFQHEADER: string             = 'Request For Quote';                                                                        //:060: Request For Quote
  export const C_BUZ_DES_RFQDETAIL: string             = 'Request For Quote';                                                                        //:061: Request For Quote
  export const C_BUZ_DES_RFO: string                   = 'Request For Order (Sales)';                                                                //:062: Request For Order (Sales)
  export const C_BUZ_DES_RFOHEADER: string             = 'Request For Order';                                                                        //:063: Request For Order
  export const C_BUZ_DES_RFODETAIL: string             = 'Request For Order';                                                                        //:064: Request For Order
  export const C_BUZ_DES_RFW: string                   = 'Request For Work (Service, Product)';                                                      //:065: Request For Work (Service, Product)
  export const C_BUZ_DES_RFWHEADER: string             = 'Request For Work';                                                                         //:066: Request For Work
  export const C_BUZ_DES_RFWDETAIL: string             = 'Request For Work';                                                                         //:067: Request For Work
  export const C_BUZ_DES_RFB: string                   = 'Request For Bill (Financial Processes)';                                                   //:068: Request For Bill (Financial Processes)
  export const C_BUZ_DES_RFBHEADER: string             = 'Request For Bill';                                                                         //:069: Request For Bill
  export const C_BUZ_DES_RFBDETAIL: string             = 'Request For Bill';                                                                         //:070: Request For Bill
  export const C_BUZ_DES_RFA: string                   = 'Request For Payment (Financial Processes)';                                                //:071: Request For Payment (Financial Processes)
  export const C_BUZ_DES_RFAHEADER: string             = 'Request For Payment';                                                                      //:072: Request For Payment
  export const C_BUZ_DES_RFADETAIL: string             = 'Request For Payment';                                                                      //:073: Request For Payment
  export const C_BUZ_DES_RFC: string                   = 'Request For Collection (Financial Processes)';                                             //:074: Request For Collection (Financial Processes)
  export const C_BUZ_DES_RFCHEADER: string             = 'Request For Collection';                                                                   //:075: Request For Collection
  export const C_BUZ_DES_RFCDETAIL: string             = 'Request For Collection';                                                                   //:076: Request For Collection
  export const C_BUZ_DES_BOM: string                   = 'Bill Of Materials (Manufacturing, Service)';                                               //:077: Bill Of Materials (Manufacturing, Service)
  export const C_BUZ_DES_BOMHEADER: string             = 'Bill Of Materials';                                                                        //:078: Bill Of Materials
  export const C_BUZ_DES_BOMDETAIL: string             = 'Bill Of Materials';                                                                        //:079: Bill Of Materials
  export const C_BUZ_DES_BOO: string                   = 'Bill Of Operations (Manufacturing, Service)';                                              //:080: Bill Of Operations (Manufacturing, Service)
  export const C_BUZ_DES_BOOHEADER: string             = 'Bill Of Operations';                                                                       //:081: Bill Of Operations
  export const C_BUZ_DES_BOODETAIL: string             = 'Bill Of Operations';                                                                       //:082: Bill Of Operations
  export const C_BUZ_DES_QUALITY: string               = 'Quality Control (Material, Manufacturing)';                                                //:083: Quality Control (Material, Manufacturing)
  export const C_BUZ_DES_PICKING: string               = 'Picking (Fulfillment)';                                                                    //:084: Picking (Fulfillment)
  export const C_BUZ_DES_PACKING: string               = 'Packing (Fulfillment)';                                                                    //:085: Packing (Fulfillment)
  export const C_BUZ_DES_SHIPPING: string              = 'Shipping (Fulfillment)';                                                                   //:086: Shipping (Fulfillment)
  export const C_BUZ_DES_RETURN: string                = 'Return (Fulfillment)';                                                                     //:087: Return (Fulfillment)
  export const C_BUZ_DES_SELL: string                  = 'VENDOR (Owner) + AGENT (Seller, Manufacturing, Overhead)';                                 //:088: VENDOR (Owner) + AGENT (Seller, Manufacturing, Overhead)
  export const C_BUZ_DES_BUY: string                   = 'CLIENT (Prospect) + AGENT (Buyer)';                                                        //:089: CLIENT (Prospect) + AGENT (Buyer)
  export const C_BUZ_DES_MAKE: string                  = '(BOM + BOO) + AGENT (Manufacturing)';                                                      //:090: (BOM + BOO) + AGENT (Manufacturing)
  export const C_BUZ_DES_USE: string                   = 'INVENTORY + AGENT (Manufacturing, Overhead)';                                              //:091: INVENTORY + AGENT (Manufacturing, Overhead)
  export const C_BUZ_DES_SYSTEM: string                = 'Automation (Scale, Speed)';                                                                //:092: Automation (Scale, Speed)
  export const C_BUZ_DES_DEFAULT: string               = 'Automation (Scale, Speed)';                                                                //:093: Automation (Scale, Speed)
  export const C_BUZ_DES_OPTION: string                = 'Automation (Scale, Speed)';                                                                //:094: Automation (Scale, Speed)
  export const C_BUZ_DES_USER: string                  = 'Automation (Scale, Speed)';                                                                //:095: Automation (Scale, Speed)
  export const C_BUZ_DES_SEARCH: string                = 'Automation (Scale, Speed)';                                                                //:096: Automation (Scale, Speed)
  export const C_BUZ_DES_NOTE: string                  = 'Automation (Scale, Speed)';                                                                //:097: Automation (Scale, Speed)
  export const C_BUZ_DES_LAST: string                  = 'Last Entry';                                                                               //:098: Last Entry
  //#endregion DESCRIPTIONS
  //
  //EOF
