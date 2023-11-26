#TEMPLATE(zzzEQUATES,'Create EQUATE Definitions'),FAMILY('ABC')
#!-----------------------------------------------------------------------------------------------------
#! RA.2018.01.21.SUN      Roberto Artigas Jr
#!  *   Created template skeleton for the ABC templates
#!-----------------------------------------------------------------------------------------------------
#!-----------------------------------------------------------------------------------------------------
#!INCLUDE('cape01.tpw')
#!INCLUDE('cape02.tpw')
#!-----------------------------------------------------------------------------------------------------
#!-----------------------------------------------------------------------------------------------------
#SYSTEM 
#EQUATE(%tplVersionRYB  , '1.10')
#EQUATE(%tplReleaseRYB  , '2018.01.21')
#!-----------------------------------------------------------------------------------------------------
#EQUATE(%rybVersion     ,'Version '&%tplVersionRYB&' [ '&%tplReleaseRYB&' ]'                  )
#EQUATE(%rybVerName     ,'Run Your Business (RYB) template collection.'                       )
#EQUATE(%rybVerCpyRghts ,'Copyright © 1999-' & YEAR(TODAY()) & ' by Roberto Artigas y Soler'  )
#EQUATE(%rybVerRsrvAll  ,'All rights reserved world wide.'                                    )
#EQUATE(%rybVerEmail    ,'E-MAIL: roberto.artigas.dev@gmail.com'                              )
#!-----------------------------------------------------------------------------------------------------
#!-----------------------------------------------------------------------------------------------------
#!-----------------------------------------------------------------------------------------------------
#!-----------------------------------------------------------------------------------------------------
#GROUP(%ReplaceSubString,*%pString,%OldSubString,%NewSubString,%pCaseSensitive=0) #!,AUTO
#DECLARE(%lPosition,LONG)
#DECLARE(%lLen,LONG)
#SET(%lPosition,1)
#SET(%lLen,LEN(%OldSubString))
#LOOP
#!! REPLACE 0 !! pString(%pString)
#!! REPLACE 0 !! OldSubString(%OldSubString)
#!! REPLACE 0 !! NewSubString(%NewSubString)
#!! REPLACE 0 !! lPosition(%lPosition)
#!! REPLACE 0 !! lLen(%lLen)
  #IF(%pCaseSensitive)
     #SET(%lPosition,INSTRING(%OldSubString,%pString,1,%lPosition))
  #ELSE
     #SET(%lPosition,INSTRING(UPPER(%OldSubString),UPPER(%pString),1,%lPosition))
  #ENDIF
#!! REPLACE 5 !! lPosition(%lPosition)
  #IF (%lPosition=0)
    #BREAK
  #ELSE
    #SET(%pString,SUB(%pString,1,%lPosition-1)&%NewSubString&SUB(%pString,%lPosition+%lLen,LEN(CLIP(%pString))-%lPosition))
    #SET(%lPosition,%lPosition+LEN(%NewSubString))
  #ENDIF
#ENDLOOP
#!! REPLACE 9 !! pString(%pString)
#!! REPLACE 9 !! OldSubString(%OldSubString)
#!! REPLACE 9 !! NewSubString(%NewSubString)
#!! REPLACE 9 !! lPosition(%lPosition)
#!! REPLACE 9 !! lLen(%lLen)
#!-----------------------------------------------------------------------------------------------------
#GROUP(%FamilyFind, *%FamilyFound)
#IF(VarExists(%AppTemplateFamily))
  #IF(%AppTemplateFamily='CLARION')
    #SET(%FamilyFound,'LEGACY')
  #ELSE
    #SET(%FamilyFound,'ABC')
  #ENDIF
#ELSIF(VarExists(%cwtemplateversion))
  #IF(%cwtemplateversion = 'v5.5')
    #IF(VarExists(%ABCVersion))
      #SET(%FamilyFound,'ABC')
    #ELSE
      #SET(%FamilyFound,'LEGACY')
    #ENDIF
  #ELSE
    #IF(%cwtemplateversion = 'v2.003')
      #SET(%FamilyFound,'LEGACY')
    #ELSE
      #SET(%FamilyFound,'ABC')
    #ENDIF
  #ENDIF
#ENDIF
#!-----------------------------------------------------------------------------------------------------
#GROUP(%ClarionFamily)
#PREPARE
  #IF(NOT VAREXISTS(%FamilyFound))
    #DECLARE(%FamilyFound)
  #ENDIF
  #!INSERT(%FamilyFind, %FamilyFound)
  #CALL(%FamilyFind, %FamilyFound)
  #IF(NOT VAREXISTS(%FamilyTextRYB))
    #DECLARE(%FamilyTextRYB)
  #ENDIF
  #SET(%FamilyTextRYB,                  'Template Family being used by this application.')
  #!SET(%FamilyTextRYB, %FamilyTextRYB & '<13,10><13,10>')
  #SET(%FamilyTextRYB, %FamilyTextRYB & ' This will be set automatically once a compile has been performed.')
  #SET(%FamilyTextRYB, %FamilyTextRYB & '')
#ENDPREPARE
#!BOXED(''),AT(,,278)
#BOXED(UPPER(%Application) & '.' & UPPER(%ProgramExtension)),AT(,,454),PROP(PROP:FontStyle,700)
  #DISPLAY(''),AT(,,,1)
  #!DISPLAY(%FamilyTextRYB),AT(,,260,34)
  #DISPLAY(%FamilyTextRYB),AT(,,436,14)
  #ENABLE(%FALSE)
    #!PROMPT('Template Family:',@S10),%FamilyFound,DEFAULT(''),AT(80,,100,10)
    #PROMPT('Template Family:',@S10),%FamilyFound,DEFAULT(''),AT(80,,100,10),PROP(PROP:READONLY,1),PROP(PROP:FontStyle,700),PROP(PROP:FontColor,0C79A3H)
  #ENDENABLE
  #DISPLAY(''),AT(,,,1)
#ENDBOXED
#!-----------------------------------------------------------------------------------------------------
#GROUP(%TabClarionVersion)
#TAB('Family')
#INSERT(%ClarionFamily)
#ENDTAB
#!-----------------------------------------------------------------------------------------------------
#!-----------------------------------------------------------------------------------------------------
#GROUP(%PreambleRYB)
#PREPARE
  #IF(NOT VAREXISTS(%PreambleTextRYB))
    #DECLARE(%PreambleTextRYB)
  #ENDIF
  #SET(%PreambleTextRYB,                    'Run Your Business (RYB) template collection.')
  #SET(%PreambleTextRYB, %PreambleTextRYB & '<13,10>Copyright © 1999-' & YEAR(TODAY()) & ' by Roberto Artigas y Soler')
  #SET(%PreambleTextRYB, %PreambleTextRYB & '<13,10>All rights reserved world wide.')
  #SET(%PreambleTextRYB, %PreambleTextRYB & '<13,10>E-MAIL: roberto.artigas.dev@gmail.com')
#ENDPREPARE
#BOXED(%rybVersion),AT(,,,55),PROP(PROP:FontStyle,700)
  #DISPLAY(''),AT(,,,1)
  #DISPLAY(%rybVerName    ),AT(10,10)
  #DISPLAY(%rybVerCpyRghts),AT(10,20)
  #DISPLAY(%rybVerRsrvAll ),AT(10,30)
  #DISPLAY(%rybVerEmail   ),AT(10,40)
  #!DISPLAY(%PreambleTextRYB),AT(,,260,44)
#ENDBOXED
#!-----------------------------------------------------------------------------------------------------
#!-----------------------------------------------------------------------------------------------------
#GROUP(%MITLicenseTextRYB)
#PREPARE
  #IF(NOT VAREXISTS(%MITLicenseTextRYB01))
    #DECLARE(%MITLicenseTextRYB01)
  #ENDIF
  #IF(NOT VAREXISTS(%MITLicenseTextRYB02))
    #DECLARE(%MITLicenseTextRYB02)
  #ENDIF
  #IF(NOT VAREXISTS(%MITLicenseTextRYB03))
    #DECLARE(%MITLicenseTextRYB03)
  #ENDIF
  #SET(%MITLicenseTextRYB01, '')
  #SET(%MITLicenseTextRYB01, %MITLicenseTextRYB01 & 'Permission is hereby granted, free of charge, to any person')
  #SET(%MITLicenseTextRYB01, %MITLicenseTextRYB01 & ' obtaining a copy of this software and associated documentation')
  #SET(%MITLicenseTextRYB01, %MITLicenseTextRYB01 & ' files (the "Software"), to deal in the software without')
  #SET(%MITLicenseTextRYB01, %MITLicenseTextRYB01 & ' restriction, including without limitation the rights to use,')
  #SET(%MITLicenseTextRYB01, %MITLicenseTextRYB01 & ' copy, modify, merge, publish, distribute, sublicense, and/or sell')
  #SET(%MITLicenseTextRYB01, %MITLicenseTextRYB01 & ' copies of the Software, and to permit persons to whom the Software')
  #SET(%MITLicenseTextRYB01, %MITLicenseTextRYB01 & ' is furnished to do so, subject to the following conditions:')
  #SET(%MITLicenseTextRYB02, '')
  #SET(%MITLicenseTextRYB02, %MITLicenseTextRYB02 & 'The above copyright notice and this permission notice shall be')
  #SET(%MITLicenseTextRYB02, %MITLicenseTextRYB02 & ' included in all copies or substantial portions of the Software.')
  #SET(%MITLicenseTextRYB03, '')
  #SET(%MITLicenseTextRYB03, %MITLicenseTextRYB03 & 'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,')
  #SET(%MITLicenseTextRYB03, %MITLicenseTextRYB03 & ' EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF')
  #SET(%MITLicenseTextRYB03, %MITLicenseTextRYB03 & ' MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND')
  #SET(%MITLicenseTextRYB03, %MITLicenseTextRYB03 & ' NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT')
  #SET(%MITLicenseTextRYB03, %MITLicenseTextRYB03 & ' HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,')
  #SET(%MITLicenseTextRYB03, %MITLicenseTextRYB03 & ' WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,')
  #SET(%MITLicenseTextRYB03, %MITLicenseTextRYB03 & ' OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER')
  #SET(%MITLicenseTextRYB03, %MITLicenseTextRYB03 & ' DEALINGS IN THE SOFTWARE.')
  #SET(%MITLicenseTextRYB03, %MITLicenseTextRYB03 & '')
#ENDPREPARE
#!-----------------------------------------------------------------------------------------------------
#!-----------------------------------------------------------------------------------------------------
#GROUP(%MITLicenseRYB)
#INSERT(%MITLicenseTextRYB)
#!BOXED('MIT License'),AT(,,278),PROP(PROP:FontStyle,700)
#BOXED('MIT License'),AT(,,454),PROP(PROP:FontStyle,700)
  #DISPLAY(''),AT(,,,1)
  #DISPLAY('Copyright © 2018-' & YEAR(TODAY()) & ' by Roberto Artigas y Soler.'),PROP(PROP:FontStyle,700)
  #DISPLAY(''),AT(,,,1)
  #!DISPLAY(%MITLicenseTextRYB01),AT(,,260,54)
  #!DISPLAY(%MITLicenseTextRYB02),AT(,,260,24),PROP(PROP:FontStyle,700)
  #!DISPLAY(%MITLicenseTextRYB03),AT(,,260,64)
  #DISPLAY(%MITLicenseTextRYB01),AT(,,436,36)
  #DISPLAY(%MITLicenseTextRYB02),AT(,,436,14),PROP(PROP:FontStyle,700)
  #DISPLAY(%MITLicenseTextRYB03),AT(,,436,44)
#ENDBOXED
#!-----------------------------------------------------------------------------------------------------
#!-----------------------------------------------------------------------------------------------------
#INCLUDE('RYB010.TPW')          ! RA.2023.10.28: #GROUP:    Templates and Changes documentation
#INCLUDE('RYB011.TPW')          ! RA.2023.10.28: Utility:   ISO-369-1 Language (EQU,CSV,TXT,IMP)
#INCLUDE('RYB012.TPW')          ! RA.2023.10.28: Extension: ISO-369-1 Language (EQU,CSV,TXT,IMP)
#INCLUDE('RYB013.TPW')          ! RA.2023.10.28: Utility:   Star System (EQU,CSV,TXT)
#INCLUDE('RYB014.TPW')          ! RA.2023.10.28: Extension: Star System (EQU,CSV,TXT)
#INCLUDE('RYB015.TPW')          ! RA.2023.11.22: Utility:   Planetary Body (EQU,CSV,TXT)
#INCLUDE('RYB016.TPW')          ! RA.2023.11.23: Extension: Planetary Body (EQU,CSV,TXT)
#INCLUDE('RYB017.TPW')          ! RA.2023.11.24: Utility:   Continent (EQU,CSV,TXT)
#INCLUDE('RYB018.TPW')          ! RA.2023.11.24: Extension: Continent (EQU,CSV,TXT)
#INCLUDE('RYB019.TPW')          ! RA.2023.11.24: Utility:   Continent Area (EQU,CSV,TXT)
#INCLUDE('RYB020.TPW')          ! RA.2023.11.24: Extension: Continent Area (EQU,CSV,TXT)
#INCLUDE('RYB021.TPW')          ! RA.2023.11.24: Utility:   Country (EQU,CSV,TXT,IMP)
#INCLUDE('RYB022.TPW')          ! RA.2023.11.25: Extension: Country Area (EQU,CSV,TXT)
#INCLUDE('RYB101.TPW')          ! RA.2018.02.15: Utility:   Entities (EQU,CSV,TXT)
#INCLUDE('RYB102.TPW')          ! RA.2018.02.15: Extension: Entities (EQU,CSV,TXT)
#INCLUDE('RYB111.TPW')          ! RA.2018.02.15: Utility:   Create equates RAYS (EQU,CSV,TXT)
#INCLUDE('RYB112.TPW')          ! RA.2018.02.15: Extension: Create equatea RAYS (EQU,CSV,TXT)
#!-----------------------------------------------------------------------------------------------------
#!-----------------------------------------------------------------------------------------------------
!