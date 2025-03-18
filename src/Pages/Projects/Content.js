import MfcMain from "../../Img/Videos/MiniFaceonChanger/MfcMain.mp4"
import PlayerSearch from "../../Img/Videos/MiniFaceonChanger/PlayerSearch.mp4"
import Apply from "../../Img/Videos/MiniFaceonChanger/Apply.mp4"
import Reset from "../../Img/Videos/MiniFaceonChanger/Reset.mp4"
import MfcThum1 from "../../Img/Videos/MiniFaceonChanger/Thumbnail/Thum1.png"
import MfcThum2 from "../../Img/Videos/MiniFaceonChanger/Thumbnail/Thum2.png"
import MfcThum3 from "../../Img/Videos/MiniFaceonChanger/Thumbnail/Thum3.png"
import MfcThum4 from "../../Img/Videos/MiniFaceonChanger/Thumbnail/Thum4.png"
import SettingPath from "../../Img/Videos/MiniFaceonChanger/SettingPath.mp4"

import HarmonyMain from "../../Img/Videos/Harmony/HarmonyMain.mp4"
import Search from "../../Img/Videos/Harmony/Search_1_.mp4"
import SearchCountry from "../../Img/Videos/Harmony/Search_2_.mp4"
import Expended from "../../Img/Videos/Harmony/Search_3_.mp4"
import RandomPick from "../../Img/Videos/Harmony/Search_4_.mp4"
import Quiz from "../../Img/Videos/Harmony/Search_5_.mp4"
import Rank from "../../Img/Videos/Harmony/Search_6_.mp4"
import HarmonyThum1 from "../../Img/Videos/Harmony/Thumbnail/Thum1.png"
import HarmonyThum2 from "../../Img/Videos/Harmony/Thumbnail/Thum2.png"
import HarmonyThum3 from "../../Img/Videos/Harmony/Thumbnail/Thum3.png"
import HarmonyThum4 from "../../Img/Videos/Harmony/Thumbnail/Thum4.png"
import HarmonyThum5 from "../../Img/Videos/Harmony/Thumbnail/Thum5.png"
import HarmonyThum6 from "../../Img/Videos/Harmony/Thumbnail/Thum6.png"
import HarmonyDoc from "../../document/Harmony/Harmony조 캡스톤 디자인 보고서.hwp"

import MainPage from "../../Img/Videos/WeGoHiVE/MainPage.mp4"
import WeGoHiveMain from "../../Img/Videos/WeGoHiVE/WeGoHiveMain.mp4"
import WeGoHiveDoc from "../../document/WeGoHiVE/1조 프로젝트 수행 결과 보고서 WeGoHiVE.pptx"

import FmKorea from "../../Img/ETC/FmKorea.png"
import Inven from "../../Img/ETC/Inven.png"
import GoogleDrive from "../../Img/ETC/GoogleDrive.png"
import Git from "../../Img/ETC/Git.jpg"
import Hwp from "../../Img/ETC/Hwp.png"
import Ppt from "../../Img/ETC/Ppt.png"

const projects = [
    {
      id: 1,
      common: {
          title: "WeGoHiVE",
          shortDesc: "클라우드 기반 통합 교육 플랫폼(Team)",
          devPeriod: "개발 기간 : 2024.11 ~ 2025.01",
          
        },

      preView: {
        whatIDid: [
          {key: 1, content: "Youtube API를 통한 영상 학습시스템 구현(풀스택)"},
          {key: 2, content: "파일 시스템을 이용한 과제 제출 시스템 구현(풀스택)"},
          {key: 3, content: "책임자 권한 전용 페이지 구현(프론트엔드)"}
        ],
        mainVid: WeGoHiveMain
      },
      
      main: { 
        devBackground: [
          "디지털 시대의 학습 환경은 빠르게 변화하고 있으며, 기존의 온라인과 오프라인 교육이 연계 중심이 아닌 별도의 운영을 진행하고 있어, 소통과 접근성에서 한계를 보이고 있습니다.",
          "이러한 문제를 해결하기 위해, 누가나 손쉽게 학습에 접근하고 개인화된 학습 경험을 제공할 수 있는 온라인 교육 플랫폼을 기획하게 되었습니다."
        ],
        projectFeatures: [
          "React framework를 통해 SPA 방식으로 구현하였으며, 테일윈드 CSS와 MUI 라이브러리를 통해, 반응형 웹(모바일 환경 지원)형식으로 빠르게 구현할 수 있었습니다.",
          "SpringBoot를 사용하여 RestAPI를 구현하였고 Lombok 라이브러리를 통해 코드 다이어트를 진행하였습니다.",
          "Youtube API를 사용하여 유튜브를 클라우드 스토리지 처럼 사용하고 Youtube의 영상 플레이어를 사용하여 강의 환경을 구축하였습니다. 또한 사용자의 강의 회차 별 영상 최대 시청 기록을 추적하여 과목의 진도율을 계산 및 업데이트를 진행하였고, 영상 별 책갈피 기능을 제공하여 강의 영상에 중요한 부분의 메모와 시점 이동 기능을 구현하였습니다.",
          "회원, 비회원, 강사, 책임자, 개별 과목 책임자, 사이트 관리자로 분리되는 권한을 두어 각 권한에 해당하는 기능을 별도로 분리하여 RBAC를 구현하였습니다.",
          "만족도 조사 기능이 존재하여 책임자와 개별 과목 책임자 권한을 통해 만족도 조사의 답변 유형과 문항을 등록할 수 있습니다. 또한 사용자는 수강중인 과목과 과정에 등록된 만족도 조사에 응답 가능합니다."
        ],
        whatIDid: [
          "본 프로젝트에서 팀장과 풀스택 개발 팀원으로 참여하였습니다. 활발한 커뮤니케이션이 프로젝트에 미치는 영향이 높다고 생각하였기 때문에 소통과 팀원간의 융합에 노력을 많이 기울였습니다. 프로젝트 초기의 사용해야할 라이브러리를 추합하여 이를 Notion으로 사용 방법과 지켜야할 규칙 등을 팀원들과 공유하고 DB 설계 시 ERD-Cloud와 해당 사이트의 메모 기능을 사용하여 테이블의 존재 이유와 추후 사용되는 용도에 대하여 명확하게 하였습니다.",
          "풀스택 개발 팀원으로서 YoutubeAPI를 통한 영상 학습시스템을 구현하였습니다. 사용자가 신청한 과정 및 개별 과목에 대한 강의 영상 별로 전체 시청을 완료한 이력이 없는 영상에 대하여 영상이 재생 중일 경우에 한하여, 3초 간격으로 SpringBoot 서버에 진행도와 마지막 시청 시점을 업데이트 하는 기능을 구현하였고 시청한 이력이 없는 시점에 대한 이동과 이전 회차를 수강완료하지 않은 상태에서 다음 회차로 이동을 방지하는 기능, 배속 기능을 막는 기능을 구현하였습니다. 또한 영상의 특정 시점을 간단한 메모와 함께 저장하는 책갈피 기능을 구현하였습니다.",
          "과제 제출 시스템을 구현하였습니다. 할당 받은 과제에 파일을 첨부하여 제출되는 시스템으로 과제 제출이 가능한 기간에 한정하여 파일을 첨부하면, 서버에 파일이 등록되는 방식입니다. 세부적으로 파일의 중복을 피하기 위하여 저장되는 파일 명은 UUID로 처리하여 실제 서버에 중복을 최소화 하여 저장되게 처리하였고 DB에는 UUID 처리된(암호화) 파일 명, 파일을 등록한 사용자의 데이터와 원본 파일 명, 파일의 크기, 서버에 저장된 경로가 업데이트되게 로직을 구현하였습니다.",
          "책임자 권한과 개별 과목 책임자의 전용 페이지의 프론트엔드를 구현하였습니다. 주요 구현 기능으로는 nivo 라이브러리를 사용하여 문항별 사용자의 만족도 조사 결과를 원 그래프와 막대 그래프로 표현하였고, 만족도 조사의 문항 목록에 문항을 답변 유형별로 생성과 삭제하는 기능과 과정과 과목 별로 문항들을 등록하여 만족도 조사를 실시하는 기능을 구현하였습니다. 또한 과정을 생성하는 기능을 구현하였습니다. 세부적으로, 기존에 개설된 개별 과목들과 임의의 강사가 배치되지 않은 과목들을 등록하여 과정 명, 참여 정원, 과정의 이미지 등의 데이터와 함께 과정을 생성할 수 있게 기능을 구현하였습니다."
        ],

        videos: [
          {
            src : MainPage,
            title : '시즌 별 선수 검색',
            desc : []
          },
          {
            src : Apply,
            title : '커스텀 미니페이스온 적용',
            desc : []
          },
          {
            src : Reset,
            title : '미니페이스온 초기화',
            desc : []
          },
          {
            src : SettingPath,
            title : '디렉터리 경로 설정',
            desc : []
          }
        ],
        
        technologyStack: [
          "HTML5",
          "JavaScript 1.5",
          "CSS3",
          "React 18.0.0",
          "Tailwind CSS V2",
          "Mui 5.0",
          "SpringBoot 3.3.6",
          "Oracle 19C(배포 시 사용)",
          "MySQL 8.0.39(개발 시 사용)"
        ],

        extraSrc : [
          {
            img: Ppt,
            src : '결과 보고서',
            category: 'File',
            link: WeGoHiveDoc
          },
          {
            img: Git,
            src : 'GitHub',
            category: 'link',
            link: 'https://github.com/rightear01/we-go-hive'
          },
        ]
      }
    },
    {
        id: 2,
        common: {
            title: "MiniFaceonChanger",
            shortDesc: "FC온라인 커스텀 미니페이스온 적용 프로그램(Personal)",
            devPeriod: "개발 기간 : 2024.07 ~ 2024.08",
            depPeriod: "배포 기간 : 2024.08 ~ Ing",
          },
  
          preView: {
            whatIDid: [
              {key: 1, content: "FC 온라인 데이터 센터 데이터 크롤링"},
              {key: 2, content: "Java Swing, Java awt를 사용한 GUI 구성"},
              {key: 3, content: "DropTargetDropEvent를 사용한 파일 드래그 앤 드롭 기능 구현"}
            ],
            mainVid: MfcMain
          },
        
          main: {
            devBackground: [
              "넥슨에서 피파 온라인 시리즈를 서비스한 이래로 많은 유저들이 제작한 선수 이미지가 각종 커뮤니티(inven, FM korea등)와 인터넷 상에 누적되어 왔습니다.",
              "이를 적용할 수 있는 프로그램 몇몇 등장하였으나, 사용성이 떨어지고 프로그램 내부에 DB를 두었기 때문에 선수가 추가되면 개발자가 지속적으로 선수단 DB를 관리하고 이를 유저들이 직접 찾아서 다운로드 해야하는 번거로움이 존재하였고 유저들이 제작한 이미지를 적용하기 위해서는 복잡한 과정을 거쳐야만 가능했습니다.",
              "이러한 문제를 해결하기 위한 방법으로 FC 온라인의 데이터 센터에서 이미지와 다른 데이터를 가져오는 방식으로 개발을 기획하게 되었습니다."
            ],
            projectFeatures: [
              "게임 상에 선수들이 새로 생성되어도 Selenium라이브러리를 통한 홈페이지의 데이터센터를 크롤링하였기 때문에 추가적인 선수들 정보 업데이트를 진행하지 않아도 되어 프로그램 업데이트를 최소화 하였습니다.",
              "기존 유저들이 외부에서 제작된 선수의 사진을 게임에서 사용하기 위해서 거쳐야 하는 방법을 기반으로 FC온라인 홈페이지의 데이터 센터의 URL들과 반환되는 값들을 분석하여 알고리즘을 구상하였습니다.",
              "웹 사이트 상에서 게임이 설치되어 있는 로컬 디렉터리에 접근하여 파일을 변조하는 방법은 웹의 정책 상 허용되지 않는 방식이기에 UI를 Java Swing과 Java awt를 사용하여 구성하게 되었습니다. ",
              "DropTargetDropEvent를 사용하여 사용자가 변경하고자 하는 선수를 검색 및 클릭하고 특정 이미지를 Drag and Drop 하면 쉽게 변경 가능하게 구성하였습니다.",
              "커뮤니티 사이트인 에펨코리아, FC온라인 인벤 등에 Google Drive링크를 첨부하였고 유저들과 소통하면서 받은 피드백을 수용하여 버전 관리를 수 차례 진행했습니다."
            ],

            videos: [
              {
                src : PlayerSearch,
                title : '시즌 별 선수 검색',
                desc : [
                  'FC 온라인 데이터센터를 데이터 크롤링을 통하여 검색된 선수의 시즌 별 이미지와 사진 정보를 프로그램에 출력합니다.',
                  '출력된 각 이미지를 클릭 할 경우 사진 변경을 진행할 수 있는 팝업창이 출력됩니다.'
                ],
                thumNail : MfcThum1
              },
              {
                src : Apply,
                title : '커스텀 미니페이스온 적용',
                desc : [
                  '출력된 팝업창에 적용을 원하는 이미지를 Drag and Drop을 진행합니다.',
                  '이후 인게임에 적용된 모습을 확인 가능합니다.'
                ],
                thumNail : MfcThum2
              },
              {
                src : Reset,
                title : '미니페이스온 초기화',
                desc : [
                  `동일한 팝업창에 존재하는 '미페 초기화' 버튼을 클릭.`,
                  'FC 온라인 데이터 센터에 지정되어있는 기본 이미지로 변환이 가능합니다.'
                ],
                thumNail : MfcThum3
              },
              {
                src : SettingPath,
                title : '디렉터리 경로 설정',
                desc : [
                  '커스텀 미니페이스온을 적용하기 위한 디렉터리 경로 설정으로',
                  'FC 온라인이 다운로드 되어있는 루트 디렉터리로 설정합니다.'
                ],
                thumNail : MfcThum4
              }
            ],

            technologyStack: [
              "JAVA SE – 22",
              "JAVA Swing",
              "JAVA awt",
              "Selenium 4.25",
              "lunch4j",
            ],

            extraSrc : [
              {
                img: FmKorea,
                src : 'FmKorea',
                category: 'link',
                link: 'https://www.fmkorea.com/7408686985'
              },
              {
                img: Inven,
                src : 'Inven',
                category: 'link',
                link: 'https://www.inven.co.kr/board/fifaonline4/3145/54395'
              },
              {
                img: GoogleDrive,
                src : 'GoogleDrive',
                category: 'link',
                link: 'https://drive.google.com/file/d/1cAdQVqQqHSd0XAwPuzOTFxWWYV1RbFOo/view'
              },
              {
                img: Git,
                src : 'GitHub',
                category: 'link',
                link: 'https://github.com/rightear01/MiniFaceonChanger'
              },
            ],

            footNote: "커스텀 미니페이스온 : 사용자가 제작한 선수의 이미지를 뜻함."
          }
      },
      {
        id: 3,
        common: {
            title: "Harmony",
            shortDesc: "3D 지구본을 이용한 생물의 다양성 지도(Team)",
            devPeriod: "개발 기간 : 2024.11 ~ 2025.01",
          },
  
          preView: {
            whatIDid: [
              {key: 1, content: "Globe.gl 라이브러리를 사용하여 3D 지구본을 통한 검색 UI 구현"},
              {key: 2, content: "멸종 위기 종의 정보를 표시하는 팝업 창 구현"},
              {key: 3, content: "여러 경우의 수로 나뉘어지는 검색 결과를 표시하는 UI 구현"},
              {key: 4, content: "랜덤한 4종의 멸종 위기 종을 노출하는 팝업 창 구현"},
              {key: 5, content: "멸종 위기 종의 퀴즈 시스템 구현(프론트엔드)"}
            ],
            mainVid: HarmonyMain
          },
          
          main: {
            devBackground: [
              "인간의 무자비한 개척과 개발 등과 같은 이유로 인하여 초래된 기후변화로 멸종위기에 놓인 종들이 많아짐에 따라 생물의 다양성이 감소하였습니다.",
              "본 프로젝트는 3D 지구본을 활용하여 사용자들에게 멸종위기종의 서식지와 개체수에 따른 위험도, 해당 종에 대한 세부 정보를 제공함으로써 생물의 다양성에 대한 소개와 교육적 콘텐츠를 제공하기 위하여 제작하게 되었습니다."
            ],
            projectFeatures: [
              "본 프로젝트는 3D지구본을 통하여 시각화된 나라들과 직접 상호작용할 수 있습니다. 이러한 점들은 사용자들에게 흥미를 유발할 수 있습니다.",
              "검색 기능을, 나라를 통한 검색과 식물*동물*전체로 나누어지는 종을 통한 검색을 지원하여 다양한 방법으로 검색을 할 수 있는 환경을 제공합니다.",
              "멸종 위기종에 대한 위험도의 정보를 시각적으로 표현하고 종이 서식하고 있는 여러 나라들을 지구본에서 직접 확인할 수 있는 서비스를 제공합니다.",
              "페이지 전면에서는 20초마다 변경되는 멸종위기 종 4종을 위험도와 함께 노출하여 명칭에 대하여 친숙하지 않은 사용자들에게 여러 종을 소개합니다.",
              "실시간 조회 랭킹 시스템이 존재하며, 하루동안 검색량이 많은 10종에 대한 데이터를 제공합니다.",
              "퀴즈 시스템이 존재하며, 친숙치 않은 멸종 위기 종에 대한 정보를 쉽게 학습할 수 있는 환경을 제공합니다."
            ],
            whatIDid: [
              "본 프로젝트에서 팀장으로 참여하게 되었고 프로젝트의 기획과 프론트엔드 설계 및 구현에 대한 업무를 담당했습니다.",
              "UI 부분에서는 사용자와 사이트 사이에서 Interactive한 환경을 제공하기 위해 메인 페이지의 3D 지구본의 좌표 이동의 전환 효과 애니메이션이 다채로워야 한다고 생각하였습니다. 이를 Globe.gl 라이브러리를 활용하여, 메인 페이지에서 fetch문을 통한 검색 결과에 대한 지구본의 전환 효과를 구현하였습니다.",
              "세부적인 내용은 검색이 완료되면 메인 페이지의 3D 지구본의 나라 좌표를 페이지의 중앙으로 이동한 뒤 나라에 서식하는 멸종위기 종에 대한 정보가 팝업 창에 출력되는 방식으로 진행하였습니다.",
              "IUCN(국제 자연 보전 연맹)기관이 정의한 멸종 위기 종의 등급을 종의 세부 정보를 담고 있는 팝업 창에 위험도를 표현하는 베터리 디자인과 백분율로 심각성을 표현할 수 있는 디자인을 설계 및 구현하는 작업을 맡아 위험도를 직관적이게 표현하였습니다.",
              "멸종 위기 종들의 정보 습득을 재미있게 할 수 있는Quiz 시스템을 설계 및 구현 하였습니다. 사진으로 노출된 멸종 위기 종의 이름을 맞추는 객관식 4지 선다형 40개의 문제로 Fisher-Yates 알고리즘을 통해, 현재 문제로 표출되는 종을 다음 문제에서는 배제하고 랜덤으로 문제를 출시하는 방식으로 설계하였습니다"
            ],

            videos: [
              {
                src : Search,
                title : '지구본을 통한 나라 탐색',
                desc : [
                  "마우스를 조작하여 페이지 전면에 존재하는 3D 지구본을 탐방해 볼 수 있습니다.",
                  "마우스를 나라에 올려 놓으면, 나라의 한글 명칭과 영문 명칭이 함께 출력되게 제작하였습니다.",
                  "팝업창은 Drag이벤트를 통하여 좌표 변경이 가능합니다."
                ],
                thumNail : HarmonyThum1
              },
              {
                src : SearchCountry,
                title : '지구본을 통한 멸종위기종 조회',
                desc : [
                  "지구본에 출력되어 있는 나라를 클릭하면, 나라에 서식하는 멸종위기종에 대한 데이터를 조회 가능합니다.",
                  "특정 멸종위기종을 클릭하면, 멸종위기종의 세부정보를 담고 있는 팝업창이 출력됩니다."
                ],
                thumNail : HarmonyThum2
              },
              {
                src : Expended,
                title : '멸종위기종이 서식하는 모든 지역 조회',
                desc : [
                  "출력된 팝업창에서 '나라 더보기' 버튼을 클릭하면, 객체 안전도 비율의 색상에 따라 종이 서식하고 있는 모든 나라들을 시각적으로 확인할 수 있습니다.",
                  "해당 상태에서는 지구본을 조작하더라도 검색 및 조회 또는 '더보기 해제'를 진행하지 않으면, 시각적으로 표현된 나라들의 상태가 변하지 않게됩니다."
                ],
                thumNail : HarmonyThum3
              },
              {
                src : RandomPick,
                title : '20초마다 갱신되는 멸종위기종 랜덤 팝업창',
                desc : [
                  "생물의 다양성 문제를 사용자에게 호소하기 위해서는 다양한 멸종위기종에 대한 정보를 지속적으로 노출시켜야 한다고 생각하여 제작하게 되었습니다.",
                  "20초마다 랜덤한 4종의 멸종위기종이 출력되며, 특정 종을 클릭시 종의 세부정보를 담고있는 팝업창이 출력됩니다."
                ],
                thumNail : HarmonyThum4
              },
              {
                src : Quiz,
                title : '퀴즈 시스템',
                desc : [
                  "멸종위기종에 대한 정보를 쉽게 학습할 수 있는 퀴즈 시스템입니다.",
                  "그림의 정답과 그렇지 않은 3종의 명칭이 출력됩니다.",
                  "정답을 제출하게 되면, 점수(Score)가 증가하며, 오답을 제출하게 되면 점수의 감소와 3초 동안 정답인 명칭을 출력하여 피드백을 진행합니다."
                ],
                thumNail : HarmonyThum5
              },
              {
                src : Rank,
                title : '조회 랭킹 시스템',
                desc : [
                  "하루동안 누적된 멸종위기종 검색 횟수를 순위와 함께 노출하는 팝업창입니다."
                ],
                thumNail : HarmonyThum6
              }
            ],

            technologyStack: [
              "HTML5",
              "JavaScript 1.5",
              "CSS3",
              "Java 17",
              "SpringBoot 3.2.2",
              "Globe.gl",
              "IUCN RedList API",
              "MySQL 8.0.39"
            ],

            extraSrc : [
              {
                img: Hwp,
                src : '프로젝트 보고서',
                category: 'File',
                link: HarmonyDoc
              },
              {
                img: Git,
                src : 'GitHub',
                category: 'link',
                link: 'https://github.com/rightear01/Harmony_Project_Front'
              },
            ]
          }
      },
  ];
  
  export default projects;