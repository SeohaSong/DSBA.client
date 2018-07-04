(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/_services/database.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/database.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var DatabaseService = /** @class */ (function () {
    function DatabaseService() {
    }
    DatabaseService.ngInjectableDef = i0.defineInjectable({ factory: function DatabaseService_Factory() { return new DatabaseService(); }, token: DatabaseService, providedIn: "root" });
    return DatabaseService;
}());
exports.DatabaseService = DatabaseService;
var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());
exports.Project = Project;
exports.PROJECTS = [
    {
        img: 'assets/img/projects/1.png',
        title: '2018.03 ~ 2019.02: XAI (eXplainable AI) 기반 스마트 에너지 플랫폼 기술 개발 (한국전력공사 전력연구원)',
        contents: [
            {
                title: '탐색적 자료 분석(EDA)을 통한 전력수요 패턴 분석 및 신규 변수 추출',
                contents: [
                    'Data cleaning, Integrating, Transformation 등의 데이터 전처리 과정을 수행하여 데이터들의 품질을 이용하여 분석 전 전력 수요 데이터의 품질을 향상',
                    '탐색적 자료 분석을 이용한 전력수요 패턴의 탐색적 자료 분석 및 신규 변수 추출',
                    '전력 사용처에 따른 탐색적 자료 분석(Exploratory Data Analysis;EDA) 기법 개발 및 데이터 특성에 맞는 후처리 작업 수행'
                ]
            },
            {
                title: '신규 변수와 기존 예측 모델의 변수기반의 머신러닝 기법을 통한 15분,30분 단위의 초단기 전력수요 예측 기법 개발',
                contents: [
                    'Auto-Encoder, PCA, SVD 등 의 전력 수요예측을 위한 잠재 변수 추출',
                    '1D-Convolution Auto-encoder를 통한 잠재변수 추출',
                    'Gradient Boosting Machine, Random Forest, Support Vector Machine, Neural Network 등 의 다양한 머신러닝 기법 등을 이용'
                ]
            },
            {
                title: '딥러닝 기반의 고성능 단기 전력 수요예측 모델 개발',
                contents: [
                    'Sliding Window 기반의 최적 Training set 검출',
                    'Deep Neural Network, Recurrent Neural Network, Convolutional Neural Network 기반의 전력 수요예측 모델 개발',
                    '전력 수요 예측을 위한 다양한 Network architecture 구성 및 검증',
                    '다양한 딥러닝 기반의 전력수요 예측모델을 통해 기존 머신 러닝 학습 방법론 대비 성능 향상 및 연산 효율성 증진을 기대'
                ]
            }
        ]
    },
    {
        img: 'assets/img/projects/2.png',
        title: '2018.04 ~ 2018.11, 딥러닝 기반 Wafer Bin Map 이상 및 Map Fail 패턴 탐지 방법 (삼성전자)',
        contents: [
            {
                title: '일 단위 WBM Clustering 및 WBM 패턴 생성 비율 기준 특이 날짜 탐지 방법론',
                contents: [
                    'WBM은 다양한 제 품별, 공정 경로 등 여러 상황에 따라 다르게 패턴이 나타나며, 일 별/공정 단위 WBM의 특이 패턴의 변화 탐색 필요',
                    '과거 대비 WBM의 패턴이 많이 변화 하였다는 것은 공정 Job schedule, 재료의 변화 등이 있음',
                    '본 연구는 비슷한 공정 상황에서의 각 일자 별 WBM의 패턴이 상이하게 생산될 경우 이를 탐지하여 엔지니어에게 공정 프로파일링의 우선순위 정보를 제공하고자 함',
                    '각 제품의 WBM 이상 패턴을 위한 변수를 추출 할 수 있는 Convolution Autoencoder 방법론을 사용하여 일 단위 WBM 결과 해석'
                ]
            }
        ]
    },
    {
        img: 'assets/img/projects/3.png',
        title: '2018.04 ~ 2018.10, 모바일 환경에서 사용자 행위기반 실시간 이상징후 탐지기법 연구 (국가보안기술연구소)',
        contents: [
            {
                title: '딥러닝 기반 모바일 사용자의 실시간 인증의 필요성',
                contents: [
                    '내부자의 권한 없는 접속, 이용, 공개, 방해, 변경 및 파괴로부터 정보시스템을 보호',
                    '기업 내부의 정보 보호를 통해 정보의 무결성, 기밀성 및 가용성을 유지'
                ]
            },
            {
                title: '순환신경망을 활용한 사용자 인증 시스템으로 새로운 원천 기술 확보',
                contents: [
                    '모바일 환경에서의 사용자 인증 방법론 기술 확보'
                ]
            }
        ]
    },
    {
        img: 'assets/img/projects/4.png',
        title: '2018.04 ~ 2018.10, 해상환경 추정 정확도 향상을 위한 이미지 프로세싱을 통한 해상환경 추정기법 개발 (대우조선해양)',
        contents: [
            {
                title: ' 선박의 최적항로 탐색을 위한 해상환경 추정의 필요성',
                contents: [
                    '해상에서의 운항중인 선박의 최적 항로 선택을 위해서 해상 환경에 대한 추정이 필요함',
                    '기존의 추정방법은 실시간 예측이 어렵고 넓은 지역에 대한 상태를 예측하므로, 경제적인 운항경로 탐색을 위해 보다 작은 시공간 단위에 대한 해상환경 추정기법이 필요함'
                ]
            },
            {
                title: '해상 이미지를 통한 머신러닝 기반의 파랑정보 예측 연구 ',
                contents: [
                    '해상에서 운용 중인 선박에서 확보된 해상사진을 이용하여 파랑정보(파도 높이, 방향, 주기 등)을 예측하는 머신러닝 기반 방법론 개발',
                    '정확한 추정을 위해 기상, 해양정보 및 이미지 촬영 정보 고려함'
                ]
            }
        ]
    },
    {
        img: 'assets/img/projects/5.png',
        title: '2018.03 ~ 2019.02: QoE 정보를 이용한 머신러닝 미디어 스트리밍 최적화 시스템 개발 (정보통신기술진흥센터)',
        contents: [
            {
                title: 'ABR(Available Bit Rate)',
                contents: [
                    'HTTP 동적 적응 스트리밍(Dynamic Adaptive Streaming over HTTP, DASH)',
                    'http를 이용하여 사용자의 통신 상태에 맞춰 최적의 품질로 멀티미디어 콘텐츠를 전송하는 적응 스트리밍 기술'
                ]
            },
            {
                title: '사용자의 콘텐츠 사용에 대한 QoE 분석 기술 개발',
                contents: [
                    '사용자의 콘텐츠 이용 경험을 통해 생성되는 QoE 데이터에 대한 다각적인 분석',
                    '특이한 형태의 QoE 데이터를 조기에 판별 적절한 대응 전략을 수립할 수 있는 알고리즘 구축'
                ]
            },
            {
                title: 'QoE 향상을 위한 CDN 배치 최적화',
                contents: [
                    '동영상등 대용량 미디어 콘텐츠를 PC, 모바일 단말등에 서비스하기 위해서는 다양한 계층의 CDN을 구축하고, 각 CDN에 콘텐츠를 적절히 배치하여야 함',
                    '멀티 CDN의 최적화를 위한 미디어 컨텐츠의 뷰카운트 예측 및 전체 비용의 최적화'
                ]
            }
        ]
    },
    {
        img: 'assets/img/projects/6.png',
        title: '2018.06 ~ 2019.02: 딥러닝을 활용한 문서와 그래프의 유사성 판단에 대한 연구 (NCSoft)',
        contents: [
            {
                title: '연상작용을 통한 문장의 유사여부 판단',
                contents: [
                    '사람이 연상작용을 통해 두 문장의 유사여부를 판단하는 것처럼 연상작용을 모델에 적용해 문장을 이미지에 빗대어 표현한 후, 두 문장의 유사여부를 판단하고자 함',
                    '전체 모델 구조는 두개의 input을 받을 수 있는 siamese network에 문장 embedding module과 association module을 적용'
                ]
            },
            {
                title: '경제 지표를 통한 과거의 유사한 날 식별',
                contents: [
                    '각 날에 기록된 경제 지표들을 통하여 데이터 생성',
                    '비정형 또는 정형 데이터를 사용하여 날(day)을 representation',
                    '각 날들의 유사도 비교'
                ]
            }
        ]
    },
    {
        img: 'assets/img/projects/7.png',
        title: '2018.03 ~ 2019.032: 머신러닝을 활용한 시스템 이상상태 탐지기술 연구 (국방과학연구소)',
        contents: [
            {
                title: 'Data Representation Learning',
                contents: [
                    'Syscall을 하나의 token으로 취급하여 Syscall-Syscall sequence의 관계를 텍스트 분석의 단어-문서 관계와 동일하게 설정',
                    'Doc2vec을 사용하여 Syscall의 관계를 고려한 d차원 벡터 representation 학습',
                    'TF-IDF, Bag-of-Words(BOW)를 사용하여 Syscall의 개수만큼의 차원을 갖는 벡터로 representation 학습'
                ]
            },
            {
                title: 'Novelty Detection',
                contents: [
                    '정상 상태의 데이터만을 사용하는 비지도학습 기반의 이상치 탐지 기법을 적용하여 정상-비정상 class간의 불균형 문제 극복',
                    '다양한 머신러닝 이상치 탐지 기법을 적용하여 데이터에 가장 적합한 모형 탐색'
                ]
            }
        ]
    },
    {
        img: 'assets/img/projects/8.png',
        title: '2017.11 ~ 2018.04: 뉴스 기사 및 댓글 극성 분석 방법론 개발 (시그널 코리아)',
        contents: [
            {
                title: null,
                contents: [
                    '뉴스 기사, 댓글의 극성을 분류하는 딥러닝 기반의 모델 개발',
                    '문서 분류에서 좋은 성능을 보이는 Recurrent Neural Network와 Attention mechanism을 적용',
                    '극성 판별 확률이 높지 않은 gray 영역에 속하는 데이터에 중립 label 할당'
                ]
            }
        ]
    },
    {
        img: 'assets/img/projects/9.png',
        title: '2017.09~2017.12: 빅데이터 기반 조기경보모형 연구 개발 (금융감독원)',
        contents: [
            {
                title: '현 금융위험조기경보모형의 한계',
                contents: [
                    '데이터의 가용성, 정확성에 의존적인 모형으로 인한 신뢰성 및 예측력 문제',
                    '시시각각 변화하는 금융환경 및 금융산업의 구조로 인한 예측력 약화',
                    '정량적(quantitative) 데이터 위주의 분석에 정성적(qualitative) 데이터 분석으로 보완할 필요가 있음'
                ]
            },
            {
                title: '빅데이터 기반 조기경보모형',
                contents: [
                    '빅데이터(뉴스 및 민원)를 통한 기존 조기 경보 모형의 통해서 정성적(qualitative)인 한계점을 극복',
                    '기존 재무 변수와 빅데이터를 동시 활용함으로써 금융위기조기경보모형의 시너지 효과를 확보',
                    '단순계량기법이 아닌 기계학습 및 딥러닝을 활용하여 예측력 높은 조기경보모형을 구축'
                ]
            }
        ]
    },
    {
        img: 'assets/img/projects/10.png',
        title: '2017.07~2018.01: 딥러닝 및 텍스트마이닝 기반의 VDS 분석 시스템 개발 (현대자동차)',
        contents: [
            {
                title: '이상치 탐지를 이용한 특이 VDS 응답 추출',
                contents: [
                    '텍스트 분석을 통해 특이, 민감 소비자 의견 청취를 목적으로 함',
                    'VDS 응답에 Doc2Vec 모델을 적용하여 벡터로 나타낸 후 novelty detection 기법을 활용해 각 응답별 정량적인 특이 점수 산출'
                ]
            },
            {
                title: 'LDA 기반 소비자 만족도 요인 추출 및 군집화',
                contents: [
                    'VDS 소비자 의견에 토픽모델링(LDA) 적용',
                    '문서 별 토픽의 비중을 이용해 각 VDS 소비자 의견을 다차원 공간상의 한 점으로 표현',
                    '군집화 기법을 이용해 유사 VDS 군집화 혹은 세분화'
                ]
            }
        ]
    },
    {
        img: 'assets/img/projects/11.png',
        title: '2017.05~2017.10: 딥러닝 기반의 웨이퍼 맵 분류 및 원인 규명 시각화 알고리즘 개발 (삼성전자)',
        contents: [
            {
                title: null,
                contents: [
                    '딥러닝 기반의 이상 Wafer 인식기 개발 및 원인규명 시각화 알고리즘 개발을 목적으로 함',
                    '엔지니어들의 다양한 사전 지식을 통합적으로 반영하고 모사하고자 함',
                    '최근 머신러닝 분야에서 월등한 이미지 처리 성능을 보여주는 딥러닝 구조인 Convolutional Neural Network(CNN)을 사용하여 분류 정확도를 향상시킴',
                    'CNN을 사용하여 Wafer Bin Map의 불량의 원인이 되는 위치를 추출 및 파악함'
                ]
            }
        ]
    },
    {
        img: 'assets/img/projects/12.png',
        title: '2017.05~2018.03: 정형/비정형 데이터 기반의 경제 Knowledge Mining  기술 연구 (NCSoft)',
        contents: [
            {
                title: null,
                contents: [
                    '주가 데이터(정형)와 뉴스기사(비정형)로부터 의미 있는 Knowledge Extraction을 목적으로 함',
                    '뉴스 기사를 통한 네트워크 분석 기반 핵심 이벤트를 추출 및 시각화',
                    '뉴스 기사의 representation을 통한 뉴스기사 event pattern 추출',
                    '각 기간별 기사의 representation의 유사도를 기준으로 과거 유사 주가 pattern을 추출',
                    'Similarity/Distance에 근거한 유사한 과거 탐색 및 주식 동향 예측'
                ]
            }
        ]
    },
    {
        img: 'assets/img/projects/13.png',
        title: '2017.04~2018.03: QoE 정보를 이용한 머신러닝 미디어 스트리밍 최적화 시스템 개발 (정보통신기술진흥센터)',
        contents: [
            {
                title: null,
                contents: [
                    '동영상 등 대용량 미디어 콘텐츠를 인터넷과 모바일 상에서 효율적으로 서비스하기 위해, CDN (Content Delivary Network)상 콘텐츠를 자동적으로 배치하는 머신러닝 기반의 알고리즘과 라이브러리를 개발함',
                    '사용자의 콘텐츠 사용에 대한 QoE(Quality of Experience) Report 수집 기술 개발',
                    '멀티 CDN 하에서 성능/가격 최적화를 위한 동적 콘텐츠 배치 및 CDN 선택 알고리즘 개발',
                    '단말단 콘텐츠 활용을 위한 QoE(Quality of Experiece) Report 시스템 기술 개발',
                    '멀티 CDN하 성능/가격화 최적화 알고리즘'
                ]
            }
        ]
    },
    {
        img: 'assets/img/projects/14.png',
        title: '2016.08~2017.02: 다변량 설비/품질 분석용 병렬 Machine learning/Artificial Intelligence 알고리듬 개발(삼성전자)',
        contents: [
            {
                title: null,
                contents: [
                    '“딥러닝 기반의 이상 Wafer 인식기 개발” 을 목적으로 함',
                    '엔지니어들의 다양한 사전 지식(domain knowledge)를 통합적으로 반영하고 모사하고자 함',
                    '최근 머신러닝 분야에서 월등한 이미지 처리 성능을 보여주는 딥러닝 구조인 Convolutional Neural Network(CNN)을 사용하여 분류 정확도를 향상시키고자 함',
                    '삼성전자에서 제공한 EDS Wafer BIN Map 결과와 엔지니어들에 의해 사전 정의된 정상/불량 정보',
                    'BIN map을 통해 정상/불량을 판별 가능한 Convolutional Neural Network(CNN) 구조 설계 및 BIN Color schema framework 제시'
                ]
            }
        ]
    },
    {
        img: 'assets/img/projects/15.png',
        title: '2016.10 ~ 2017.03: 뉴스와 주가를 이용한 Knowledge Extraction 기술 개발 (NCSoft)',
        contents: [
            {
                title: null,
                contents: [
                    '금융 분야에서의 정형/비정형 데이터를 기반으로 의미 있는 정보를 추출',
                    'Text(뉴스기사)로부터 정형 데이터(주가)를 해석하는 방법론 개발',
                    '뉴스기사로부터 해당 기사의 내용을 함축적으로 표현하는 Keyword 추출 및 일반화',
                    'Machine Learning을 활용한 금융/경제 분야 기사와 주가와의 연관성 추출',
                    '뉴스 기사와 주가 흐름의 관계를 3가지(실시간, 선행, 후행)측면으로 해석'
                ]
            }
        ]
    },
    {
        img: 'assets/img/projects/16.png',
        title: '2016.05 ~ 2017. 04: 비정형의 빅데이터를 활용하여 경쟁환경에서 사업자의 신제품 포지셔닝과 다기간 제품 포트폴리오 선정에 도움을 줄 수 있는 전사적 의사결정 시스템의 개발 (연구책임자, 연세대학교 모정훈 교수님)',
        contents: [
            {
                title: null,
                contents: [
                    '비정형 형태인 휴대폰에 대한 한글 리뷰 텍스트를 통해 수요분석과 전사적 의사결정에 도움이 되는 시스템 개발',
                    '온라인 휴대폰 커뮤니티 사이트(세티즌, 뽐뿌 등)를 통하여 한글 휴대폰 리뷰 텍스트 수집',
                    '비정규 형태(신조어, 문법오류 등)의 한글 휴대폰 리뷰 텍스트에 능동적으로 대응하면서 높은 정확도를 나타내는 준지도학습 기반의 자연어 처리 엔진 개발',
                    '휴대폰의 기능에 대해 ‘배터리, 화면, 디자인, 스펙, 음질, 촬영, 운영체제 ‘ 7가지의 기능으로 분류하고 해당 리뷰에 대한 기능 점수 할당 및 감정 스코어 추출',
                    '자연어 처리 엔진을 바탕으로 휴대폰 도메인에 대한 한국어 감성 어휘 사전을 구축하고 구축된 어휘를 기반으로 하는 텍스트 감성 분석 기술 개발'
                ]
            }
        ]
    },
    {
        img: 'assets/img/projects/17.png',
        title: '2016. 09 ~ 2016. 12: 뉴스 기사 극성 방법론 개발, granted by 시그널코리아',
        contents: [
            {
                title: null,
                contents: [
                    '뉴스 기사가 가진 내재적 감성을 정량적 수치로 표현하는 방법론 개발',
                    '뉴럴넷 기반의 단어 임베딩 방법론과 머신러닝 기반의 감성 전파 방법론을 이용한 텍스트 감성 분석 기술 적용',
                    'Corpus 내 출현 단어에 대해 uni-gram 단위와 bi-gram 단위 두 관점으로 각각의 감성사전을 구축',
                    '두개의 감성사전을 ensemble한 최종 뉴스 감성점수 추출',
                    '뉴스 기사 기반의 한국어 감성 어휘 사전 구축 및 실제 기사 감성 검수'
                ]
            }
        ]
    },
    {
        img: 'assets/img/projects/18.png',
        title: '2016.11 ~ 2017. 01: 초음파 관련 임상연구 데이터의 텍스트마이닝 플랫폼 개발, granted by 삼성메디슨',
        contents: [
            {
                title: null,
                contents: [
                    '2009년, 2015년에 등록된 의료용 초음파 연구 관련 초록 문헌을 수집',
                    '토픽 모델링 기반의 초음파 임상연구 주요 주제 및 트렌드를 분석',
                    '초음파 임상연구 관련 주요 키워드와 네트워크를 분석하고 연구자 및 연구기관 간의 협업 네트워크를 분석',
                    '의료 연구 관련 주제 및 트렌드 분석, 키워드 네트워크 분석, 연구자 및 연구기관 협업 네트워크 플랫폼 개발을 통한 분석 환경을 제공'
                ]
            }
        ]
    },
    {
        img: 'assets/img/projects/19.png',
        title: '2016.04 ~ 2016.11: 보안 데이터 분석을 위한 사용자 행위 모델 연구 (국가보안기술연구소)',
        contents: [
            {
                title: null,
                contents: [
                    '기업 내부 및 협력 사 직원에 의한 정보 유출 문제가 보안에서 화두가 되고 있는데 이를 방지하기 위해서 사용자 행위 모델을 구축하고 이를 탐지하기 위한 기계학습/데이터마이닝 알고리즘 개발',
                    '시스템 로그 데이터로부터 내부자 위협 탐지 관련 주요 특성(Feature) 추출',
                    '개별 그룹 사용자의 대표 사용 패턴 탬플릿 생성 및 정상 사용자와의 유사도 추정 방법론 개발',
                    '사용자 행위 그래프 기반의 이상 탐지 방법론 개발',
                    '기계학습 기반의 이상 탐지 기법을 이용한 사용자 행위 모델의 활용 가능성 평가'
                ]
            }
        ]
    },
    {
        img: 'assets/img/projects/20.png',
        title: '2016.03 ~ 2016.08: Information Quality 평가 기술 개발 (NCSoft)',
        contents: [
            {
                title: null,
                contents: [
                    '금융 분야에서 대화 형식의 질의에 대한 정형/비정형 데이터를 기반으로 정보를 추출하여 적절한 답변을 제공할 수 있는 질의-응답 방법론 개발',
                    '뉴스기사로부터 해당 기사의 내용을 함축적으로 표현하는 Keyword 추출 및 일반화',
                    'Machine Learning을 통한 금융/경제 분야 기사의 속성 (속보/ 시황-전망/ 홍보 / 분석 등) 을 자동으로 분류',
                    '기업간 주가 변동의 연관성을 통한 동적 네트워크 구축',
                    '종목간 네트워크를 통해 기업들의 군집 파악 및 군집 내 발생 기사들을 분석'
                ]
            }
        ]
    },
    {
        img: 'assets/img/projects/21.png',
        title: '2016.03 ~ 2016.08: Information Quality 평가 기술 개발 (NCSoft)',
        contents: [
            {
                title: null,
                contents: [
                    '제품 유형별 특성을 고려한 신제품 수명주기 예측모형 개발',
                    '신제품 수명주기 예측모형의 정확도 향상을 위한 최적의 제품 특성값 산출',
                    '신제품 수명주기 예측을 바탕으로 수요예측 모형으로의 연계 토대 마련',
                ]
            }
        ]
    },
    {
        img: 'assets/img/projects/22.png',
        title: '2015.05 ~ 2015. 07: Opinion Generation 기술 개발 (NCSoft)',
        contents: [
            {
                title: null,
                contents: [
                    '사람의 대화 형식의 질의에 대해 해당 분야(domain)의 정형/비정형 데이터를 기반으로 적절한 답변을 제공하는 질의-응답 방법론 개발',
                    '대화형태의 질의를 탐색 가능한 형태의 질의 집합으로 변환',
                    '질의 집합에 해당하는 속성에 대해 정형 데이터와 비정형 데이터로부터 필요한 정보를 추출',
                    '추출된 정보를 결합하여 평가요소의 긍정/부정의 정도를 표현'
                ]
            }
        ]
    },
    {
        img: 'assets/img/projects/23.png',
        title: '2014.05 ~ 2017. 04: 빅데이터를 활용한 준지도학습 기반의 한글 자연어처리 엔진 개발 및 응용, (한국연구재단 신진연구자 지원사업)',
        contents: [
            {
                title: null,
                contents: [
                    '비정규 형태(신조어, 문법오류 등)의 한글 텍스트에 능동적으로 대응하면서 높은 정확도를 나타내는 준지도학습 기반의 자연어 처리 엔진 개발',
                    '높은 정밀도와 재현율을 갖는 한국어 감성 어휘 사전을 구축하고 구축된 어휘를 기반으로 하는 텍스트 감성 분석 기술 개발',
                    '자연어 처리 엔진을 바탕으로 감성분석기술을 적용하여 사회 트렌드 분석과 같은 빅데이터 기반 텍스트 분석 및 활용 사례 발굴'
                ]
            }
        ]
    }
];
var Cooperation = /** @class */ (function () {
    function Cooperation() {
    }
    return Cooperation;
}());
exports.Cooperation = Cooperation;
exports.COOPERATIONS = [
    {
        img: "assets/img/main/cooperations/add.jpg",
        name: "국방과학연구소"
    },
    {
        img: "assets/img/main/cooperations/dapa.jpg",
        name: "방위사업청"
    },
    {
        img: "assets/img/main/cooperations/dsme.jpg",
        name: "대우조선해양"
    },
    {
        img: "assets/img/main/cooperations/fss.png",
        name: "금융감독원"
    },
    {
        img: "assets/img/main/cooperations/hyundai.png",
        name: "현대자동차"
    },
    {
        img: "assets/img/main/cooperations/iitp.jpg",
        name: "정보통신기술진흥센터"
    },
    {
        img: "assets/img/main/cooperations/kcb.jpg",
        name: "케이씨비"
    },
    {
        img: "assets/img/main/cooperations/kepco.gif",
        name: "한국전력공사"
    },
    {
        img: "assets/img/main/cooperations/kisti.png",
        name: "한국과학기술정보연구원"
    },
    {
        img: "assets/img/main/cooperations/lgd.jpg",
        name: "엘지디스플레이"
    },
    {
        img: "assets/img/main/cooperations/naver.png",
        name: "네이버"
    },
    {
        img: "assets/img/main/cooperations/ncsoft.jpg",
        name: "엔씨소프트"
    },
    {
        img: "assets/img/main/cooperations/nrf.jpg",
        name: "한국연구재단"
    },
    {
        img: "assets/img/main/cooperations/nsr.png",
        name: "국가보안기술연구소"
    },
    {
        img: "assets/img/main/cooperations/samsung.jpg",
        name: "삼성전자"
    },
    {
        img: "assets/img/main/cooperations/samsungmedison.jpg",
        name: "삼성메디슨"
    },
    {
        img: "assets/img/main/cooperations/signal.jpg",
        name: "시그널코리아"
    },
    {
        img: "assets/img/main/cooperations/skt.jpg",
        name: "에스케이텔레콤"
    }
];
var Publication = /** @class */ (function () {
    function Publication() {
    }
    return Publication;
}());
exports.Publication = Publication;
exports.PUBLICATIONS = [
    {
        type: 'international-journal',
        title: 'International Journal',
        contents: [
            {
                content: "Hakyeon Lee and Pilsung Kang*. (2017+). Identifying core topics in technology and innovation management studies: A topic model approach, Journal of Technology Transfer, Accepted for Publication. (SSCI).",
                url: null
            },
            {
                content: "Seokho Kang and Pilsung Kang*. (2018). Locally linear embedding for regression, Information Sciences 432, 199-209. (SCI).",
                url: "https://www.sciencedirect.com/science/article/pii/S0020025517303420"
            },
            {
                content: "Junhong Kim, Haedong Kim, and Pilsung Kang*. (2018). Keystroke dynamics-based user authentication using freely typed text based on user-adaptive feature extraction and novelty detection, Applied Soft Computing 62, 1077-1087. (SCIE).",
                url: "https://www.sciencedirect.com/science/article/pii/S1568494617305847"
            },
            {
                content: "Boseop Kim, Hakyeon Lee, and Pilsung Kang*. (2018). Integrating cluster validity indices based on data envelopment analysis, Applied Soft Computing 64, 94-108. (SCIE).",
                url: "https://www.sciencedirect.com/science/article/pii/S1568494617307202"
            },
            {
                content: "Young Joon Park, Hyung Seok Kim, Hankyu Lee, Dongwha Kim, Seoung Bum Kim, and Pilsung Kang*. (2017). A deep learning-based sports player evaluation model based on game statistics and news articles, Knowledge-Based Systems 138, 15-26. (SCI).",
                url: "https://www.sciencedirect.com/science/article/pii/S095070511730446X"
            },
            {
                content: "Daeseon Choi, Younho Lee, Seok Hyun Kim, and Pilsung Kang*. (2017). Undisclosed private attribute inference from Facebook profile data, Industrial Management & Data Systems 117(8), 1687-1706. (SCIE).",
                url: "http://www.emeraldinsight.com/doi/full/10.1108/IMDS-07-2016-0276"
            },
            {
                content: "Taegu Kim, Jungsik Hong and Pilsung Kang* (2017). Box-office forecasting considering competitive environment and word-of-mouth in social networks: A case study of Korean film market. Computational Intelligence and Neuroscience, Volume 2017, Article ID 4315419. (SCIE).",
                url: "https://www.hindawi.com/journals/cin/2017/4315419/"
            },
            {
                content: "Seokho Kang and Pilsung Kang*. (2017). An intelligent virtual metrology system with adaptive update for semiconductor manufacturing, Journal of Process Control 52: 66-74.",
                url: null
            },
            {
                content: "Minhoe Hur, Pilsung Kang, and Sungzoon Cho*. (2016). Box-office forecasting using independent subspace method based on sentiment of movie reviews, Information Sciences 372: 608-624. (SCI).",
                url: "http://www.sciencedirect.com/science/article/pii/S0020025516306016"
            },
            {
                content: "Jongmyung Kim and Pilsung Kang*. (2016). Late payment prediction models for fair allocation of customer contact lists to call center agents, Decision Support Systems 85:84-101. (SCIE).",
                url: "http://www.sciencedirect.com/science/article/pii/S0167923616300264"
            },
            {
                content: "Pilsung Kang, Dongil Kim*, and Sungzoon Cho. (2016). Semi-supervised support vector regression based on self-training with label uncertainty: An application to virtual metrology in semiconductor manufacturing, Expert Systems with Applications 51: 85-106. (SCIE).",
                url: "http://www.sciencedirect.com/science/article/pii/S0957417415008295"
            },
            {
                content: "Taegu Kim, Jungsik Hong, and Pilsung Kang*. (2015). Forecasting box office using machine learning algorithms based on SNS data,International Journal of Forecasting 31(2): 364-390. (April-June). (SSCI).",
                url: "http://ac.els-cdn.com/S0169207014000971/1-s2.0-S0169207014000971-main.pdf?_tid=87ba2ba6-ab69-11e4-8eee-00000aacb360&acdnat=1422943226_7fee434e547d05cd44c16eef2557254b"
            },
            {
                content: "Seokho Kang, Sungzoon Cho, and Pilsung Kang*. (2015). Multi-class classification via heterogeneous ensemble of one-class classifiers, Engineering Applications of Artificial Intelligence 43: 35-43. (SCIE).",
                url: "http://www.sciencedirect.com/science/article/pii/S0952197615000846"
            },
            {
                content: "Pilsung Kang, Kyungil Kim, and Namwook Cho*. (2015). Toll fraud detection of VoIP services via an ensemble of novelty detection algorithms, International Journal of Industrial Engineering: Theory, Applications and Practice 22(2):213-222. (SCIE)",
                url: "https://sites.google.com/site/pskang80/goog_848792091"
            },
            {
                content: "Pilsung Kang* and Sungzoon Cho. (2015). Keystroke dynamics-based user authentication using long and free text strings from various input devices. Information Sciences 308: 72-93. (SCI)",
                url: "http://ac.els-cdn.com/S0020025514009062/1-s2.0-S0020025514009062-main.pdf?_tid=9b217384-ab69-11e4-9cd8-00000aacb361&acdnat=1422943259_4ce239b46fb3e36734abb8bbc4bb6b14"
            },
            {
                content: "Seokho Kang, Pilsung Kang, Taehoon Ko, Sungzoon Cho*, Su-jin Rhee, and Kyung-sang Yu. (2015). An efficient and effective ensemble of support vector machines for anti-diabetic drug failure prediction, Expert Systems with Applications 42(9): 4265-4273. (SCIE)",
                url: "http://ac.els-cdn.com/S0957417415000573/1-s2.0-S0957417415000573-main.pdf?_tid=71455f80-ab69-11e4-8efa-00000aab0f26&acdnat=1422943188_7373189854f3bf5bd5ac78cb719fcd38"
            },
            {
                content: "Pilsung Kang. (2015). The effects of different alphabets on free text keystroke authentication: A case study on the Korean-English users, Journal of Systems and Software 102: 1-11. (SCIE)",
                url: "http://ac.els-cdn.com/S0164121214002842/1-s2.0-S0164121214002842-main.pdf?_tid=4656b9b8-ab69-11e4-b604-00000aacb361&acdnat=1422943116_f43205b1d005e28a689c406aeaf20026"
            },
            {
                content: "Dongil Kim, Pilsung Kang, Seung-kyung Lee, Seokho Kang, Seungyong Doh, and Sungzoon Cho*. (2015). Improving virtual metrology performance by removing metrology noises in a training dataset, Pattern Analysis and Applications 18(1): 173-189. (SCIE)",
                url: "http://link.springer.com/article/10.1007%2Fs10044-013-0363-5"
            },
            {
                content: "Seokho Kang,  Sungzoon Cho, and Pilsung Kang*.  (2015). Constructing a multi-class classifier using one-against-one approach with different binary classifiers, Neurocomputing 149: 677-682. (SCIE)",
                url: "http://ac.els-cdn.com/S0925231214010200/1-s2.0-S0925231214010200-main.pdf?_tid=618814a2-ab69-11e4-9e71-00000aacb35e&acdnat=1422943165_ed069f4989f883fb6db8fd14a47a76a6"
            },
            {
                content: "Pilsung Kang*, Dongil Kim, and Sungzoon Cho. (2014). Evaluating the reliability level of virtual metrology results for flexible process control: a novelty detection-based approach. Pattern Analysis and Applications 17(4): 863-881. (SCIE)",
                url: "http://link.springer.com/article/10.1007%2Fs10044-014-0386-6#page-1"
            },
            {
                content: "Hakyeon Lee, Sanggook Kim, Hyunwoo Park, and Pilsung Kang*. (2014).  Pre-launch new product demand forecasting using the Bass model: A statistical and machine learning-based approach, Technological Forecasting and Social Change, 86: 49-64. (SSCI)",
                url: "http://www.sciencedirect.com/science/article/pii/S0040162513001881"
            },
            {
                content: "Pilsung Kang. (2014). One-class Naive Bayesian classifier with genetic algorithm for toll fraud detection, IEICE Transactions on Information and Systems E97-D(5): 1353-1357. (SCIE)",
                url: "http://search.ieice.org/bin/summary.php?id=e97-d_5_1353"
            },
            {
                content: "Seung-kyung Lee, Pilsung Kang, and Sungzoon Cho*. (2014). Probabilistic local reconstruction for k-NN regression and its application to virtual metrology in semiconductor manufacturing. Neurocomputing 131: 423-439. (SCIE)",
                url: "https://sites.google.com/site/pskang80/goog_2135110821"
            },
            {
                content: "Gulanbaier Tuerhong, Seoung Bum Kim*, Pilsung Kang, and Sungzoon Cho. (2014). Multivariate control chart based on hybrid novelty scores.Communications in Statistics-Simulation and Computation 43(1): 115-131. (SCIE)",
                url: "http://www.tandfonline.com/doi/abs/10.1080/03610918.2012.698775#.VOyOblOsUhI"
            },
            {
                content: "Pilsung Kang. (2013). Locally linear reconstruction based missing value imputation for supervised learning, Neurocomputing 118: 65-78. (SCIE)",
                url: "http://www.sciencedirect.com/science/article/pii/S0925231213002026"
            },
            {
                content: "Pilsung Kang, Sungzoon Cho* and Douglas L. MacLachlan. (2012). Improved response modeling based on clustering, under-sampling, and ensemble. Expert Systems with Applications 39(8): 6738-6753. (SCIE)",
                url: "http://www.sciencedirect.com/science/article/pii/S095741741101699X"
            },
            {
                content: "Pilsung Kang and Sungzoon Cho*. (2012). Support vector class description (SVCD): Classification in kernel space. Intelligent Data Analysis 16(3): 351-364. (SCIE)",
                url: "http://iospress.metapress.com/content/b070528337371028/"
            },
            {
                content: "Dongil Kim, Pilsung Kang, Sungzoon Cho*, Hyoung-joo Lee, and Seungyong Doh. (2012). Machine learning-based novelty detection for faulty wafer detection in semiconductor manufacturing. Expert Systems with Applications 39(4): 4075-4083. (SCIE)",
                url: "http://www.sciencedirect.com/science/article/pii/S0957417411014114"
            },
            {
                content: "Pilsung Kang, Dongil Kim, Hyoung-joo Lee, Seungyong Doh, and Sungzoon Cho*. (2011). Virtual metrology for run-to-run control in semiconductor manufacturing. Expert Systems with Applications 38(3): 2508-2522. (SCIE)",
                url: "http://www.sciencedirect.com/science/article/pii/S0957417410008365"
            },
            {
                content: "Pilsung Kang and Sungzoon Cho*. (2009). A hybrid novelty score and its use in keystroke dynamics-based user authentication. Pattern Recognition 42(11): 3115-3127. (SCI)",
                url: "http://www.sciencedirect.com/science/article/pii/S0031320309001502"
            },
            {
                content: "Pilsung Kang, Hyoung-joo Lee, Sungzoon Cho*, Dongil Kim, Jinwoo Park, Chan-Kyoo Park, and Seungyong Doh. (2009). A virtual metrology system for semiconductor manufacturing. Expert Systems with Applications, 36(10): 12554-12561. (SCIE)",
                url: "http://www.sciencedirect.com/science/article/pii/S0957417409004746"
            },
            {
                content: "Pilsung Kang and Sungzoon Cho. (2009). K-Means clustering seeds initialization based on centrality, sparsity, and isotropy.  Lecture Notes in Computer Science (LNCS) 5788: 109-117.",
                url: "http://link.springer.com/chapter/10.1007%2F978-3-642-04394-9_14#page-1"
            },
            {
                content: "Pilsung Kang, Sunghoon Park, Seong-seob Hwang, Hyoung-joo Lee, and Sungzoon Cho*. (2008). Improvement of keystroke data quality through artificial rhythms and cues. Computers & Security 27(1-2): 3-11. (SCIE)",
                url: "http://www.sciencedirect.com/science/article/pii/S0167404808000023"
            },
            {
                content: "Pilsung Kang and Sungzoon Cho*. (2008). Locally linear reconstruction for instance-based learning. Pattern Recognition 41(11): 3507-3518. (SCI)",
                url: "http://www.sciencedirect.com/science/article/pii/S0031320308001404"
            },
            {
                content: "Pilsung Kang, Seongseob Hwang, and Sungzoon Cho. (2007). Continual retraining of keystroke dynamics based authenticator.  Lecture Notes in Computer Science (LNCS) 4642: 1203-1211.",
                url: "http://link.springer.com/chapter/10.1007%2F978-3-540-74549-5_125#page-1"
            },
            {
                content: "Pilsung Kang and Sungzoon Cho. (2006). EUS SVMs: Ensemble of under-sampled SVMs for data imbalance problems.  Lecture Notes in Computer Science (LNCS) 4232: 837-846.",
                url: "http://link.springer.com/chapter/10.1007%2F11893028_93#page-1"
            },
            {
                content: "Pilsung Kang, Sunghoon Park, Sungzoon Cho, Seong-seob Hwang, and Hyoung-joo Lee. (2006). The effectiveness of artificial rhythms and cues in keystroke dynamics based user authentication. Lecture Notes in Computer Science (LNCS) 3917: 161-162.",
                url: "http://link.springer.com/chapter/10.1007%2F11734628_22"
            }
        ]
    },
    {
        type: 'domestic-journal',
        title: 'Domestic Journal',
        contents: [
            {
                content: "모경현, 박재선, 장명준, 강필성*. (2018). 단어와 자소 기반 합성곱 신경망을 이용한 문서 분류. 대한산업공학회지 44(3), 180-188.",
                url: null
            },
            {
                content: "서덕성, 모경현, 박재선, 이기창, 강필성*. (2017). 워드임베딩과 그래프 기반 준지도학습을 통한 한국어 어휘 감성 점수 산출. 대한산업공학회지 43(5), 330-340.",
                url: null
            },
            {
                content: "김해동, 김준홍, 박민식, 조수현, 강필성*. (2017). 사용자 행위 모델과 이상치 탐지 알고리즘을 활용한 내부자 이상행위 탐지. 대한산업공학회지 43(4), 276-287.",
                url: null
            },
            {
                content: "김준홍, 서덕성, 김해동, 강필성*. (2017). 인스타그램 기반의 전이학습과 게시글 메타 정보를 활용한 페이스북 스팸 게시글 판별. 대한산업공학회지 43(3), 192-202.",
                url: null
            },
            {
                content: "조수현, 김보섭, 박민식, 이기창, 강필성*. (2017). 여행 사이트 리뷰를 활용한 관광지 만족도 요인 추출 및 평가. 대한산업공학회지 43(1), 62-71.",
                url: null
            },
            {
                content: "류나현, 김형석, 강필성*. (2016). 다중선형회귀모형에서의 변수선택기법 평가. 대한산업공학회지 42(5), 314-326.",
                url: null
            },
            {
                content: "서동민, 강필성*. (2016). 자유로운 문자열의 키스트로크 다이나믹스와 일범주 분류기를 활용한 사용자 인증. 대한산업공학회지 42(4), 280-289.",
                url: null
            },
            {
                content: "류기동, 김종명, 금영정, 강필성, 김우제*. (2016). 연관 규칙 분석을 활용한 ARS 추천 메뉴 시스템 연구. 한국정보기술학회 논문지 14(3), 127-136.",
                url: null
            },
            {
                content: "박철수, 장병만, 강필성*. 파트너관계관리 성공요인의 중요도 분석. 경영과학지. (2015), 경영과학 32(4), 45-56.",
                url: null
            },
            {
                content: "박희진, 장경애, 김우제, 이윤호, 강필성*. 데이터마이닝 기법을 활용한 대학수학능력시험 영어영역 정답률 예측 및 주요 요인 분석. (2015). 정보처리학회논문지 – 소프트웨어 및 데이터공학, 4(11), 509-520.",
                url: null
            },
            {
                content: "Pilsung Kang, Youngjung Geum, Hyun-woo Park, Sang-gook Kim, Tae-eung Sung, and Hakyeon Lee*. (2015). A market-based replacement cost approach to technology valuation,  Journal of the Korean Institute of Industrial Engineers (JKIIE) 41(2): 150-161",
                url: null
            },
            {
                content: "Hyungchoong Baek and Pilsung Kang*. (2014). A priority analysis on influential factors for the success of project management office (PMO) in public sectors based on analytic hierarchy process (AHP), Journal of Korea Industry and Systems Engineering, 37(4): 42-53.",
                url: null
            },
            {
                content: "Chulsoo Park and Pilsung Kang*. (2014). The analysis of large-scale discount store location on the performance of dairy product agencies and its importance factor for agency assessment, Journal of Channel and Retailing, 19(4): 63-90.",
                url: null
            },
            {
                content: "Jongchan Lee and Pilsung Kang*. (2014). Designing and prioritizing ICT service attributes for cognitive rehabilitation using quality function deployment, Journal of Korean Institute of Information Technology, 12(6): 77-90.",
                url: null
            },
            {
                content: "Hyunjoong Kim, Sungzoon Cho and Pilsung Kang*. (2014). KR-WordRank: A Korean word extraction method based on WordRank and unsupervised learning,  Journal of the Korean Institute of Industrial Engineers (JKIIE), 40(1): 18-33.",
                url: null
            },
            {
                content: "Pilsung Kang, Youngjoon Park, Sugon Cho, and SeoungBum Kim*. (2014). Analysis on the Voting Activities of the 18th National Assembly of the South Korea based on the Member-level Similarity, Journal of the Korean Institute of Industrial Engineers (JKIIE), 40(1): 60-83.",
                url: null
            },
            {
                content: "Pilsung Kang. (2012). Missing value imputation based on locally linear reconstruction for improving classification performance, Journal of the Korean Institute of Industrial Engineers (JKIIE), 38(4): 276-284.",
                url: null
            },
            {
                content: "Pilsung Kang and Sungzoon Cho*. (2012). A study on user authentication based on keystroke dynamics of long and free texts. IE Interface, 25(3): 290-299.",
                url: null
            },
            {
                content: "Pilsung Kang, Dongil Kim, Seung-kyung Lee, Seungyong Doh, and Sungzoon Cho*. (2012). Estimating the reliability of virtual metrology predictions in semiconductor manufacturing: A novelty detection-based approach. Journal of the Korean Institute of Industrial Engineers (JKIIE), 38(1): 46-56.",
                url: null
            }
        ]
    },
    {
        type: 'international-conference',
        title: 'International Conference',
        contents: [
            {
                content: "Donghwa Kim, Deokseong Seo, Suhyoun Cho, Pilsung Kang.* (2017) Multi-co-training for Document Classification using Multi-views. INFORMS 2017 Annual Meeting, Houston, TX, Oct. 22-25.",
                url: null
            },
            {
                content: "Czang Yeob Kim, Pilsung Kang.* (2017) Aspect Extraction and Polarity Classification of Reviews Based on Deep Neural Network. INFORMS 2017 Annual Meeting, Houston, TX, Oct. 22-25.",
                url: null
            },
            {
                content: "Hyungseok Kim, Boseop Kim, and Pilsung Kang.* (2016) Evaluating information quality for news articles based on topic modeling. INFORMS 2016 Annual Meeting, Nashville, TN, Nov. 13-16.",
                url: null
            },
            {
                content: "Junhong Kim, Haedong Kim, Boseop Kim, and Pilsung Kang.* (2016) Strengthening free-text keystroke dynamics based user authentication based on user-adaptive feature construction for one-class classification. INFORMS 2016 Annual Meeting, Nashville, TN, Nov. 13-16.",
                url: null
            },
            {
                content: "Pilsung Kang, Kyungil Kim, and Nam-Wook Cho. (2013). Toll Fraud Detection of VoIP Services via an Ensemble of Novelty Detection Algorithms, The 17th International Conference on Industrial Engineering Theory, Applications and Practice, Busan, Republic of Korea, Oct. 6-9.",
                url: null
            },
            {
                content: "Pilsung Kang, Sanggook Kim, Hyunwoo Park, and Hakyeon Lee. (2013). Pre-launch new product demand forecasting based on the Bass diffusion model and an ensemble of regression algorithms, The 2nd International Symposium on System Informatics and Engineering (ISSIE2013), Xian, China.",
                url: null
            },
            {
                content: "Hyun-joong Kim, Sungzoon Cho, and Pilsung Kang. (2013). Improving word segmentation with unlabeled data, The 2nd International Symposium on System Informatics and Engineering (ISSIE2013), Xian, China.",
                url: null
            },
            {
                content: "Minhoe Hur, Sungzoon Cho, and Pilsung Kang. (2013). A hierarchical Bayesian model to predict Box-office audience of motion pictures, The 2nd International Symposium on System Informatics and Engineering (ISSIE2013), Xian, China.",
                url: null
            },
            {
                content: "Taegu Kim, Jungsik Hong, and Pilsung Kang. (2013). Forecasting the Box-Office of motion pictures using social network service data with an ensemble of machine learning algorithm, The International Symposium on Forecasting (ISF 2013), Seoul, Republic of Korea. (Student Travel Granted)",
                url: null
            },
            {
                content: "Pilsung Kang and Sungzoon Cho. (2011). Keystroke dynamics-based user verification – Who is typing now? INFORMS Annual Meeting (INFORMS 2011), Charolette, NC, USA.",
                url: null
            },
            {
                content: "Gulanbaier Tuerhong, Pilsung Kang, Sungzoon Cho, Seoung Bum Kim (2011). Integration of novelty score algorithm and control chart technique. INFORMS Annual Meeting (INFORMS 2011), Charolette, NC, USA.",
                url: null
            },
            {
                content: "Pilsung Kang and Sungzoon Cho. (2009). K-Means clustering seeds initialization based on centrality, sparsity, and isotropy. The 13th International Conferenceon Intelligent Data Engineering and Automated Learning (IDEAL 2009), Burgos, Spain. E. Corchado and H. Yin (Eds.), Lecture Notes in Computer Science LNCS 5788, 109-117.",
                url: null
            },
            {
                content: "Pilsung Kang and Sungzoon Cho. (2008). Novelty detection based on distance and topological relation. INFORMS Annual Meeting (INFORMS 2008), Washington D.C., USA.",
                url: null
            },
            {
                content: "Pilsung Kang and Sungzoon Cho. (2007). Customer data reconstruction methods for response modeling. INFORMS Annual Meeting (INFORMS 2007), Seattle, W.A., USA.",
                url: null
            },
            {
                content: "Pilsung Kang, Seongseob Hwang, and Sungzoon Cho. (2007). Continual retraining of keystroke dynamics based authenticator. The 2nd International Conference on Biometrics (ICB 2007), Seoul, Korea. S.-W. Lee and S.Z. Li (Eds.),Lecture Notes in Computer Science LNCS 4642, 1203-1211.",
                url: null
            },
            {
                content: "Pilsung Kang and Sungzoon Cho. (2006). EUS SVMSs: Ensemble of under-sampled SVMs for data imbalance problems. The 13th International Conference on Neural Information Processing (ICONIP 2006), Hong Kong, China. I. King, J. Wang, L. Chan, and D. Wang (Eds.), Lecture Notes in Computer Science LNCS 4232, 837-846.",
                url: null
            },
            {
                content: "Pilsung Kang, Sunghoon Park, Sungzoon Cho, Seong-seob Hwang, and Hyoung-joo Lee. (2006). The effectiveness of artificial rhythms and cues in keystroke dynamics based user authentication. Workshop on Intelligence and Security Informatics (WISI 2006), Singapore. H. Chen, F.Y. Wang, C.C. Yang, D. Zeng, M. Chau, and K. Chang (Eds.), Lecture Notes in Computer Science LNCS 3917, 161-162.",
                url: null
            }
        ]
    },
    {
        type: 'domestic-conference',
        title: 'Domestic Conference',
        contents: [
            {
                content: '김준홍, 박재선, 박민식, 정재윤, 강필성. (2018) CAM과 Grad-CAM 기반의 불량 웨이퍼 bin map 분류 및 원인 지역 시각화 방법론, 대한산업공학회 춘계학술대회, 현대 호텔, 경주, 4월 4일 ~ 4월 7일.',
                url: null
            },
            {
                content: '김창엽, 서승완, 김해동, 모경현, 강필성. (2018) 딥러닝 기반의 감성 분석을 위한 비교 연구, 대한산업공학회 춘계학술대회, 현대 호텔, 경주, 4월 4일 ~ 4월 7일.',
                url: null
            },
            {
                content: '김형석, 김동화, 이기창, 정세희, 박희환, 강필성. (2018) 뉴스기사와 주가 데이터를 활용한 종목 추천 Knowledge Base 구축 방법론, 대한산업공학회 춘계학술대회, 현대 호텔, 경주, 4월 4일 ~ 4월 7일.',
                url: null
            },
            {
                content: '장명준, 김창엽, 서승완, 강필성. (2018) Distance Decomposition for Extracting Variable Importance of Distance-based Novelty Detection, 대한산업공학회 춘계학술대회, 현대 호텔, 경주, 4월 4일 ~ 4월 7일.',
                url: null
            },
            {
                content: '장명준, 서승완, 강필성. (2018) Recurrent Neural Network-based Semantic Variational Autoencoder for Sequence to Sequence Learning, 대한산업공학회 춘계학술대회, 현대 호텔, 경주, 4월 4일 ~ 4월 7일.',
                url: null
            },
            {
                content: '정재윤, 서덕성, 서승완, 장명준, 강필성. (2018) 머신러닝 및 텍스트 마이닝 기반의 VDS 고객 불만 분석 기법 개발, 대한산업공학회 춘계학술대회, 현대 호텔, 경주, 4월 4일 ~ 4월 7일.',
                url: null
            },
            {
                content: '김준홍, 김형석, 박재선, 모경현. 강필성. (2017) 웨이퍼 Bin Map 데이터 기반의 불량 탐지 및 시각화를 위한 Bin2Vec 기반의 합성곱 신경망 분류기 ,대한산업공학회 추계학술대회, KAIST, 대전, 11월 4일.',
                url: null
            },
            {
                content: '김준홍, 강필성. (2017) 자유로운 문자열 기반의 사용자 인증을 위한 LSTM 기반 이상치 탐지 기법 ,대한산업공학회 추계학술대회, KAIST, 대전, 11월 4일.',
                url: null
            },
            {
                content: '모경현, 박재선, 장명준, 강필성. (2017) 단어와 자소 기반 합성곱 신경망을 이용한 문서 분류, 대한산업공학회 추계학술대회, KAIST, 대전, 11월 4일.',
                url: null
            },
            {
                content: '이기창, 정재윤, 서승완, 김창엽, 강필성. (2017) 합성곱 신경망을 사용한 약지도학습 기반의 감성분류 및 단어 어텐션, 대한산업공학회 추계학술대회, KAIST, 대전, 11월 4일.',
                url: null
            },
            {
                content: '박민식, 이기창, 김보섭, 김창엽, 강필성. (2017).  워드 임베딩을 활용한 휴대폰 리뷰에서의 핵심 대상 기능 추출, 2017 춘계 공동학술대회, 여수 EXPO 컨벤션센터, 여수, 4월 26일 ~ 4월 29일.',
                url: null
            },
            {
                content: '이기창, 강필성. (2017).  Graph-based representation을 활용한 뉴스 중요도 산출, 2017 춘계 공동학술대회, 여수 EXPO 컨벤션센터, 여수, 4월 26일 ~ 4월 29일.',
                url: null
            },
            {
                content: '김형석, 류나현, 김보섭, 서덕성, 강필성. (2016). 토픽모델링 기반 뉴스기사 평가 방법론, 2016 대한산업공학회 추계학술대회, 고려대학교, 서울, 11월 19일.',
                url: null
            },
            {
                content: '김준홍, 서덕성, 김해동, 강필성. (2016). Facebook text spam filtering based on keywords learned from Instagram and meta-information of Facebook posts, 2016 대한산업공학회 추계학술대회, 고려대학교, 서울, 11월 19일.',
                url: null
            },
            {
                content: '김보섭, 조수현, 박민식, 강필성. (2016). 관광지 평가 댓글을 활용한 만족도 요인 추출과 관광지 평가, 2016, 대한산업공학회 추계학술대회 산업융합 활성화 방안 및 사례 연구 논문 공모전, 고려대학교, 서울, 11월 19일. (논문공모전 우수상) [pdf]',
                url: null
            },
            {
                content: '김준홍, 박민식, 김해동, 조수현, 이대우, 양경아, 김기헌, 강필성. (2016). 이상치 탐지 기법을 활용한 내부자 위협 탐지 방법론 개발, 2016, 대한산업공학회 추계학술대회, 고려대학교, 서울, 11월 19일.',
                url: null
            },
            {
                content: '서덕성, 모경현, 박재선, 이기창, 강필성. (2016). Word sentiment score evaluation based on semi supervised learning in a distributed representation, 2016 대한산업공학회 추계학술대회, 고려대학교, 서울, 11월 19일.',
                url: null
            },
            {
                content: '김준홍, 강필성. (2016). 토픽모델링과 사회연결망 분석을 활용한 ‘사물인터넷’ 연구동향 분석, 2016 대한산업공학회 춘계학술대회, 제주 국제컨벤션센터, 제주, 4월 13일 ~ 15일.',
                url: null
            },
            {
                content: '이학연, 강필성. (2016). 토픽 모델링을 이용한 기술경영 분야 연구 동향 분석, 2016 대한산업공학회 춘계학술대회, 제주 국제컨벤션센터, 제주, 4월 13일 ~ 15일.',
                url: null
            },
            {
                content: '박영준, 김형석, 김동화, 이한규, 김보섭, 류나현, 김성범, 강필성. (2016). 야구 기사와 선수 기록을 활용한 딥러닝 기반 극성 판별 모델 개발, 2016 대한산업공학회 춘계학술대회, 제주 국제컨벤션센터, 제주, 4월 13일 ~ 15일.',
                url: null
            },
            {
                content: '김형석, 박민식, 강필성. (2016). 토픽모델링과 사회연결망을 이용한 딥러닝 분야 연구 동향 분석, 2016 대한산업공학회 춘계학술대회, 제주 국제컨벤션센터, 제주, 4월 13일 ~ 15일.',
                url: null
            },
            {
                content: '김준홍, 김해동 강필성. (2016). 자유로운 문자열을 활용한 향상된 키스트로크 다이나믹스 인증 방법 개발, 2016 대한산업공학회 춘계학술대회, 제주 국제컨벤션센터, 제주, 4월 13일 ~ 15일.',
                url: null
            },
            {
                content: '류나현, 김형석, 강필성. (2016). Evaluating Variable Selection Techniques for Linear Regression, 2016 대한산업공학회 춘계학술대회, 제주 국제컨벤션센터, 제주, 4월 13일 ~ 15일.',
                url: null
            },
            {
                content: '김보섭, 강필성, 이학연. (2016). 자료포락분석법(DEA)를 활용한 군집타당성분석에 관한 연구, 2016 대한산업공학회 춘계학술대회, 제주 국제컨벤션센터, 제주, 4월 13일 ~ 15일.',
                url: null
            },
            {
                content: '김동화, 서덕성, 조수현, 강필성. (2016). Multi-Co-Training을 활용한 문서 분류, 2016 대한산업공학회 춘계학술대회, 제주 국제컨벤션센터, 제주, 4월 13일 ~ 15일.',
                url: null
            },
            {
                content: '김준홍, 김해동 강필성. (2016). 일범주 분류기와 자유로운 문자열 기반의 사용자 인증 방법론, 2016 BI데이터마이닝학회 춘계학술대회, 서울 코엑스, 서울, 4월 12일.',
                url: null
            },
            {
                content: '김동화, 서덕성, 조수현, 강필성. (2016). 나이브베이즈 분류기 기반의 협동학습을 활용한 문서 분류, 2016 BI데이터마이닝학회 춘계학술대회, 서울 코엑스, 서울, 4월 12일.',
                url: null
            },
            {
                content: '서동민, 강필성. (2015). 자유로운 문자열 입력에 대한 키스트로크 다이나믹스 기반 사용자 인증, 2015 대한산업공학회 추계학술대회, 연세대학교, 서울, 11월 7일. (석사논문경진대회 우수상) [pdf]',
                url: null
            },
            {
                content: '김형석, 박영준, 이한규, 김동화, 김보섭, 류나현, 강필성, 김성범. (2015). 야구 기사와 선수 기록을 활용한 딥러닝 기반 극성 판별 모델의 개발, 2015 대한산업공학회 추계학술대회, 연세대학교 , 서울, 11월 8일. [pdf]',
                url: null
            },
            {
                content: '고태훈, 김현중, 강필성, 조성준. (2015). Fast novelty detection algorithm and its use in early fault detection for manufacturing process, 2015 춘계 공동학술대회, 라마다프라자 제주호텔, 제주, 4월 8일~11일.',
                url: null
            },
            {
                content: '김현중, 박은정, 김미숙, 김한결, 강필성, 조성준. (2015). 고속 문서 군집화를 위한 의사 단어 벡터 표현, 2015 춘계 공동학술대회, 라마다프라자 제주호텔, 제주, 4월 8일~11일.',
                url: null
            },
            {
                content: '서동민, 김준홍, 강필성. (2015). 자유로운 문자열 입력에 대한 키스트로크 다이나믹스 기반 사용자 인증, 2015 춘계 공동학술대회, 라마다프라자 제주호텔, 제주, 4월 8일~11일.',
                url: null
            },
            {
                content: '박희진, 장경애, 이윤호, 김우제, 강필성. (2015). 텍스트마이닝을 이용한 대학수학능력시험 영어영역 정답률 예측, 2015 춘계 공동학술대회, 라마다프라자 제주호텔, 제주, 4월 8일~11일.',
                url: null
            },
            {
                content: '김현중, 강필성, 조성준. (2014). 데이터마이닝 알고리즘을 위한 효율적 k-NN Graph 계산, 대한산업공학회 추계학술대회, 경기대학교, 수원, 11월 22일.',
                url: null
            },
            {
                content: '신우섭, 강필성. (2014). 연관규칙분석을 이용한 기업체 교육프로그램 추천,  대한산업공학회 추계학술대회, 경기대학교, 수원, 11월 22일.',
                url: null
            },
            {
                content: '송성민, 김준홍, 민혜종, 강필성. (2014). 데이터마이닝 기법을 이용한 요양기관 생존 여부 및 매출 예측, 대한산업공학회 추계학술대회, 경기대학교, 수원, 11월 22일.',
                url: null
            },
            {
                content: '백형충, 강필성. (2014). 계층분석기법 기반 공공사업 PMO제도 활성화요인 우선순위 분석, 한국산업경영시스템학회 춘계학술대회, 한양대학교 ERICA 캠퍼스, 안산, 5월 10일. (우수연구상)',
                url: null
            },
            {
                content: '이종찬, 강필성. (2014). 품질기능전개를 이용한 인지재활 ICT 서비스 요구사항 및 우선순위 도출, 한국산업경영시스템학회 춘계학술대회, 한양대학교 ERICA 캠퍼스, 안산, 5월 10일.',
                url: null
            },
            {
                content: 'Pilsung Kang, Youngjoon Park, Sugon Cho, and SeoungBum Kim. (2013). Analysis on the voting activities of  national assembly based on network analysis, Korean BI Data Mining Conference (Fall), Sokcho, Nov. 29-30.',
                url: null
            },
            {
                content: 'Hyunjoong Kim, Minhoe Hur, Pilsung Kang, and Sungzoon Cho. (2013). MovieRank: Combining structural and feature information ranking measure. Korean BI Data Mining Conference (Fall), Sokcho, South Korea, Nov. 29-30.',
                url: null
            },
            {
                content: 'Pilsung Kang, Youngjoon Park, Sugon Cho, and SeoungBum Kim. (2013). Analysis on the voting activities of  national assembly: A case study of South Korea, Korean Institute of Industrial Engineers Conference (Fall), Seoul, South Korea, Nov. 15.',
                url: null
            },
            {
                content: '김종명, 강필성. (2013). 종합유선방송 연체고객 미수납금 회수 여부 예측모델 구축, 한국경영과학회 추계학술대회, 이화여자대학교, 서울, 11월 2일.',
                url: null
            },
            {
                content: 'Pilsung Kang, Youngjoon Park, Sugon Cho, and SeoungBum Kim. (2013). Analysis on the Voting Activities of the 18th National Assembly of the South Korea, Korean Operations Research and Management Science Conference (Fall), Seoul, South Korea, Nov. 2.',
                url: null
            },
            {
                content: 'Pilsung Kang. (2013). How you type tells who you are: Keystroke dynamics-based user authentication, 2013 Joint Conference of KORMS and KIIE, Yeosu, South Korea.',
                url: null
            },
            {
                content: 'Hyun-joong Kim, Sungzoon Cho, and Pilsung Kang. (2013). Unsupervised approach for Korean word extraction and segmentation, 2013 Joint Conference of KORMS and KIIE, Yeosu, South Korea.',
                url: null
            },
            {
                content: 'Minhoe Hur, Pilsung Kang, and Sungzoon Cho. (2013). Box-Office prediction based on opinion mining, 2013 Joint Conference of KORMS and KIIE, Yeosu, South Korea.',
                url: null
            },
            {
                content: 'Taehoon Ko, Eunjung Park, Hyunjoong Kim, Pilsung Kang, and Sungzoon Cho. (2013). Comparing the popularity of TV programs through review site and Twitter, 2013 Joint Conference of KORMS and KIIE, Yeosu, South Korea.',
                url: null
            },
            {
                content: 'Pilsung Kang, Sanggook Kim, Hyunwoo Park, and Hakyeon Lee. (2012). Estimating the parameters of the bass model based on product attributes for forecasting a new product’s life cycle, Korean Operations Research and ManagementScience Conference (Fall), Seoul, South Korea.',
                url: null
            },
            {
                content: 'Dongil Kim, Pilsung Kang, Seung-kyung Lee, and Sungzoon Cho. (2012). A method of recovering unlabeled data and selecting training data for semisupervised support vector regression, Korean Operations Research and Management Science Conference (Fall), Seoul, South Korea.',
                url: null
            },
            {
                content: 'Seung-kyung Lee, Pilsung Kang, and Sungzoon Cho. (2012). Probabilistic local reconstruction in k-NN regression problem, Korean Operations Research and Management Science Conference (Fall), Seoul, South Korea.',
                url: null
            },
            {
                content: 'Dongil Kim, Pilsung Kang, Seung-kyung Lee, Seokho Kang, Seungyong Doh, and Sungzoon Cho. (2011). Data quality improvement for virtual metrology based on novelty detection techniques, Korean Data Mining Society Conference (Fall), Seoul, South Korea.',
                url: null
            },
            {
                content: 'Gulanbaier Tuerhong, Seoung Bum Kim, Pilsung Kang, Sungzoon Cho (2011). Integration of novelty score algorithm and control chart technique. Korean Data Mining Society Conference (Spring), Seoul, South Korea.',
                url: null
            },
            {
                content: 'Joosung Park, Pilsung Kang, Sunghoon Park, Joonha Yoon, and Sungzoon Cho (2010). User authentication based on free style text with kolmogorov-smirnov test. Korean Institute of Industrial Engineers Conference, Jeju, South Korea.',
                url: null
            },
            {
                content: 'Joosung Park, Pilsung Kang, Sunghoon Park, Joonha Yoon, and Sungzoon Cho (2010). Touch screen-based keystroke dynamics analysis with long & free text. Korean Data Mining Society Conference, Seoul, South Korea.',
                url: null
            },
            {
                content: 'Gulanbaier Tuerhong, Pilsung Kang, Sungzoon Cho, and Seoung Bum Kim (2010). Hybrid novelty score-based control chart for multivariate process monitoring. Korean Data Mining Society Conference, Seoul, South Korea.',
                url: null
            },
            {
                content: 'Pilsung Kang, Sunghoon Park, Jun-Ha Yoon, Misuk Kim, Jooseoung Park, and Sungzoon Cho. (2009). Keystroke dynamics analysis based on long & free text. Korean Data Mining Society Conference, Seoul, South Korea.',
                url: null
            },
            {
                content: 'Pilsung Kang, Sunghoon Park, Taehoon Ko, Misuk Kim, Jun-Ha Yoon, Jooseoung Park, and Sungzoon Cho. (2009). Stylus pen-based keystroke dynamics analysis. Korean Institute of Industrial Engineers Conference, Seoul, South Korea.',
                url: null
            },
            {
                content: 'Dongil Kim, Pilsung Kang, Sungzoon Cho, Hyoung-joo Lee, and Seungyong Doh. (2009). Detection of faulty wafers based on novelty detection approaches in semiconductor manufacturing. Korean Operations Research and Management Science Society Conference, Busan, South Korea.',
                url: null
            },
            {
                content: 'Pilsung Kang, Dongil Kim, Seungkyoung Lee, and Sungzoon Cho. (2009). Novelty detection for process control in semiconductor manufacturing. Korean Data Mining Society Conference, Seoul, South Korea.',
                url: null
            },
            {
                content: 'Pilsung Kang and Sungzoon Cho. (2008). Seed initialization for k-means clustering based on local topology. Korean Data Mining Society Conference, Seoul, South Korea.',
                url: null
            },
            {
                content: 'Pilsung Kang, Dongil Kim, and Sungzoon Cho. (2008). Development of virtual metrology and run-to-run control system in semiconductor manufacturing based on data mining techniques. Korean Institute of Industrial Engineers Conference, Seoul, South Korea.',
                url: null
            },
            {
                content: 'Pilsung Kang and Sungzoon Cho. (2008). Locally linear reconstruction for novelty detection. Korean Operations Research and Management Science Society Conference, Pohang, South Korea.',
                url: null
            },
            {
                content: 'Pilsung Kang and Sungzoon Cho. (2007). Classification in kernel space with 2-SVDD. Korean Data Mining Society Conference, Seoul, South Korea. (Best Paper Award)',
                url: null
            },
            {
                content: 'Pilsung Kang and Sungzoon Cho. (2006). Sampling methods for response modeling. Korean Data Mining Society Conference, Seoul, South Korea.',
                url: null
            },
            {
                content: 'Pilsung Kang and Sungzoon Cho. (2006). Under-sampling based ensemble SVMs for class imbalance. Korean Operations Research and Management Science Society Conference, Daejeon, South Korea.',
                url: null
            },
            {
                content: 'Pilsung Kang, Sunghoon Park, Sungzoon Cho, Seong-seob Hwang, and Hyoung-joo Lee. (2006). The effect of artificial rhythms and cues on keystroke dynamics analysis.The Workshop on Biometrics Engineering Research Center, Seoul, South Korea.',
                url: null
            },
            {
                content: 'Pilsung Kang, Sunghoon Park, Sungzoon Cho, Seong-seob Hwang, and Hyoung-joo Lee. (2005). The use of artificial rhythms and cues for keystroke dynamics-based authentication. Korean Data Mining Society Conference, Seoul, South Korea.',
                url: null
            },
            {
                content: 'Pilsung Kang, Sungzoon Cho, and Hyoung-joo Lee. (2004). An ensemble technique for class imbalance problem. Korean Data Mining Society Conference, Seoul, South Korea.',
                url: null
            },
            {
                content: 'Pilsung Kang, Hyoung-joo Lee, and Sungzoon Cho. (2004). SVM ensemble techniques for class imbalance problem. Korean Information Science Society Conference, Seoul, South Korea.',
                url: null
            }
        ]
    }
];
var Research = /** @class */ (function () {
    function Research() {
    }
    return Research;
}());
exports.Research = Research;
exports.RESEARCHES = [
    {
        img: 'assets/img/researches/research01.png',
        title: 'Locally Linear Reconstruction for classification, regression, novelty detection, clustering, and missing value imputation',
        contents: [{
                title: null,
                contents: [
                    '개체 기반 학습(instance-based learning)은 사전에 모델 구축이 필요 없는 방식으로 k개의 유사 개체를 통해 판단하는 k-인접 이웃(k-nearest neighbor; k-NN) 알고리즘이 대표적임',
                    'k-NN의 경우 이웃 개체의 수인 k와 이들을 결합하는 가중치(weights)에 따라 성능이 크게 좌우됨',
                    'k의 수에 강건(robust)하며 주위 개체들과의 관계(local topology)를 고려하여 재구축 오차(reconstruction error)를 최소화하는 최적화 문제를 정의함',
                    '최적화 문제의 해(solution)은 어느 이웃이(which neighbor) 얼마나 중요한지(how important)에 대한 정보를 담고 있음',
                    '이 최적화 방법론을 분류(classification), 회귀(regression), 이상치 탐지(novelty detection), 군집화(clustering), 결측치 대치(missing value imputation) 등에 적용하여 성능을 향상시킴'
                ]
            }]
    },
    {
        img: 'assets/img/researches/research02.png',
        title: 'Supervised Document Embedding & Korean Word Recognition',
        contents: [
            {
                title: null,
                contents: [
                    '한글의 경우 영어에 비해 어휘사전과 형태소분석기의 완성도가 높지 않음',
                    '어휘사전 및 형태소 분석기의 완성도를 높이기 위해 단어를 정확하게 인식하는 것이 매우 중요함',
                    '부분 글자의 위치 정보를 고려하는 단어 인식 방법론인 KR-WordRank를 개발하여 문맥에 적합한 한글 단어 인식 성능을 향상시킴',
                    '또한 단어와 문서, 그리고 문서의 범주 정보를 포함하는 distribution representation 방법인 Supervised Paragraph Vector (SPV)를 개발하여 문서 분류 성능을 향상시킴'
                ]
            }
        ]
    },
    {
        img: 'assets/img/researches/research03.png',
        title: 'Industrial & Public Applications based on Structured Data',
        contents: [
            {
                title: '반도체 공정의 가상 계측 모델 개발',
                contents: [
                    '반도체 공정 FDC 설비 데이터를 입력으로 사용하여 계측 정보를 예측하는 가상 계측(virtual metrology) 모델을 Statistical & Machine Learning algorithms을 활용하여 개발',
                    '가상 계측 정보에 대한 예측 결과값과 함께 해당 값에 대한 신뢰도를 Novelty detection algorithms을 이용하여 추정'
                ]
            },
            {
                title: '키스트로크 기반 사용자 인증',
                contents: [
                    '사용자의 타이핑 패턴을 활용하여 학습된 정상 사용자의 패턴과 유사할 경우에만 접속을 허가하는 2단계 인증 시스템 개발',
                    '패스워드, 자유로운 문자열, 다양한 입력기기, 다양한 입력 언어 등을 아우르는 통합 인증 방법론을 개발'
                ]
            }
        ]
    },
    {
        img: 'assets/img/researches/research04.png',
        title: 'Industrial & Public Applications based on Unstructured Data',
        contents: [
            {
                title: 'SNS 데이터를 활용한 영화 흥행 예측',
                contents: [
                    '영화 흥행 예측에 사용된 기존 정형 데이터에 SNS상에 해당 영화가 언급된 텍스트를 수집하고 이에 대한 감성분석을 실시하여 예측 모델의 입력 변수로 사용',
                    '기계학습 및 앙상블 기법을 이용하여 예측 성능 향상'
                ]
            },
            {
                title: '기술가치평가를 위한 유사 연구 제안서 판별',
                contents: [
                    '신기술의 적정 가치를 평가하기 위해 기존의 국가연구수행과제 중 유사한 제안서를 텍스트마이닝을 통해 판별하는 방법론 개발',
                ]
            },
            {
                title: '의안 내용 기반 통과 여부 예측',
                contents: [
                    '발의된 의안의 내용에 대한 텍스트 분석을 통해 어떤 의안이 통과되고 어떤 의안이 기각되는지를 예측하는 모델 구축',
                ]
            }
        ]
    }
];
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
exports.Student = Student;
exports.STUDENTS = [
    {
        type: "students",
        img: "assets/img/members/s000.png",
        name_ko: "김준홍",
        name_en: "Junhong Kim",
        status1: "Ph.D. Candidate",
        status2: 5,
        mail: "junhongkim@korea.ac.kr",
        CV: "https://www.dropbox.com/s/juhrp084uikeswq/Curriculum%20Vaite_JunhongKim.pdf?dl=0",
        research_areas: "Deep learning for manufacturing, OCR and their applications NLP, Keystroke dynamics authentication",
        BS: "Industrial Engineering, Seoul Nat’l Univ. of Sci. & Tech., 2014",
        MS: "Data Science, Seoul Nat’l Univ. of Sci. & Tech., 2016",
        career: null,
        current: null,
        admission: "March 1, 2016"
    },
    {
        type: "students",
        img: "assets/img/members/s001.jpg",
        name_ko: "김창엽",
        name_en: "Czangyeob Kim",
        status1: "Ph.D. Student",
        status2: 4,
        mail: "czangyeob@korea.ac.kr",
        CV: null,
        research_areas: "Data Mining, Machine Learning",
        BS: "Computer Science, Kookmin Univ., 2006",
        MS: "Information Security, Sungkyunkwan Univ., 2009",
        career: "AhnLab, South Korea(2007.1 ~ 2016.8)",
        current: null,
        admission: "September 1, 2016"
    },
    {
        type: "students",
        img: "assets/img/members/s002.jpg",
        name_ko: "김동화",
        name_en: "Donghwa Kim",
        status1: "Integrated M.S/Ph.D. Student",
        status2: 7,
        mail: "donghwa89@korea.ac.kr",
        CV: null,
        research_areas: "Text Mining, Zero-Shot Learning",
        BS: "Industrial Engineering, Seoul Nat’l Univ. of Sci. & Tech., 2015",
        MS: null,
        career: null,
        current: null,
        admission: "March 1, 2015"
    },
    {
        type: "students",
        img: "assets/img/members/s003.png",
        name_ko: "김형석",
        name_en: "Hyungseok Kim",
        status1: "Integrated M.S/Ph.D. Student",
        status2: 7,
        mail: "hskim0263@korea.ac.kr",
        CV: null,
        research_areas: "Data Mining, Social Network Analysis",
        BS: "Information Statistics, Dankook Univ., 2015",
        MS: null,
        career: null,
        current: null,
        admission: "March 1, 2015"
    },
    {
        type: "students",
        img: "assets/img/members/s004.png",
        name_ko: "박민식",
        name_en: "Minsik Park",
        status1: "Integrated M.S/Ph.D. Student",
        status2: 6,
        mail: "msp3887@korea.ac.kr",
        CV: null,
        research_areas: "Data Mining, Reinforcement learning",
        BS: "Applied Statistics, Konkuk Univ., 2015",
        MS: null,
        career: null,
        current: null,
        admission: "September 1, 2015"
    },
    {
        type: "students",
        img: "assets/img/members/s005.jpg",
        name_ko: "서승완",
        name_en: "Seungwan Seo",
        status1: "Integrated M.S/Ph.D. Student",
        status2: 3,
        mail: "seungwan0206@korea.ac.kr",
        CV: null,
        research_areas: "NLP, Reinforcement Learning",
        BS: "IT management, Seoul Nat’l Univ. of Sci.&Tech. , 2017",
        MS: null,
        career: null,
        current: null,
        admission: "March 1, 2017"
    },
    {
        type: "students",
        img: "assets/img/members/s006.jpeg",
        name_ko: "박경찬",
        name_en: "Kyoungchan Park",
        status1: "Integrated M.S/Ph.D. Student",
        status2: 1,
        mail: "pkc9410@korea.ac.kr",
        CV: null,
        research_areas: "Deep Learning, data analysis",
        BS: "Industrial Management Engineering, Korea University, 2017",
        MS: null,
        career: null,
        current: null,
        admission: "March 1, 2018"
    },
    {
        type: "students",
        img: "assets/img/members/s007.jpeg",
        name_ko: "손규빈",
        name_en: "Gyubin Son",
        status1: "Integrated M.S/Ph.D. Student",
        status2: 1,
        mail: "gyubin_son@korea.ac.kr",
        CV: null,
        research_areas: "Question Answering, Generative models in NLP",
        BS: "Business administration, Yonsei University, 2017",
        MS: null,
        career: null,
        current: null,
        admission: "March 1, 2018"
    },
    {
        type: "students",
        img: "assets/img/members/s008.png",
        name_ko: "류나현",
        name_en: "Nahyeon Ryu",
        status1: "M.S. Student",
        status2: 4,
        mail: "willow6248@korea.ac.kr",
        CV: null,
        research_areas: "Data Mining, Machine Learning",
        BS: "Physics, Chonbuk Nat’l Univ., 2013",
        MS: null,
        career: null,
        current: null,
        admission: "March 1, 2015"
    },
    {
        type: "students",
        img: "assets/img/members/s009.jpg",
        name_ko: "모경현",
        name_en: "Kyounghyun Mo",
        status1: "M.S. Student",
        status2: 4,
        mail: "momkdh2@korea.ac.kr",
        CV: null,
        research_areas: "Data Mining, Machine Learning",
        BS: "Industrial Engineering, Seoul Nat’l Univ. of Sci. & Tech., 2016",
        MS: null,
        career: null,
        current: null,
        admission: "September 1, 2016"
    },
    {
        type: "students",
        img: "assets/img/members/s010.jpg",
        name_ko: "박재선",
        name_en: "Jaeseon Park",
        status1: "M.S. Student",
        status2: 4,
        mail: "jason_park@korea.ac.kr",
        CV: null,
        research_areas: "OCR using Deep Learning",
        BS: "Mathematics, Korea University, 2016",
        MS: null,
        career: null,
        current: null,
        admission: "September 1, 2016"
    },
    {
        type: "students",
        img: "assets/img/members/s011.jpeg",
        name_ko: "이기창",
        name_en: "Gichang Lee",
        status1: "M.S. Student",
        status2: 4,
        mail: "gichang_lee@korea.ac.kr",
        CV: null,
        research_areas: "Data Mining, Machine Learning",
        BS: "Korean Language and Literature, Political Science, Seoul National University, 2009",
        MS: null,
        career: null,
        current: null,
        admission: "September 1, 2016"
    },
    {
        type: "students",
        img: "assets/img/members/s012.jpg",
        name_ko: "장명준",
        name_en: "Myeongjune Jang",
        status1: "M.S. Student",
        status2: 3,
        mail: "xkxpa@korea.ac.kr",
        CV: null,
        research_areas: "Machine Translation, Deep Learning",
        BS: "School of Industrial Management Engineering, Korea University, 2017",
        MS: null,
        career: null,
        current: null,
        admission: "March 1, 2017"
    },
    {
        type: "students",
        img: "assets/img/members/s013.png",
        name_ko: "정재윤",
        name_en: "Jaeyun Jeong",
        status1: "M.S. Student",
        status2: 3,
        mail: "winga1@korea.ac.kr",
        CV: null,
        research_areas: "Data Mining, Machine Learning",
        BS: "School of Industrial Management Engineering, Korea University, 2017",
        MS: null,
        career: null,
        current: null,
        admission: "March 1, 2017"
    },
    {
        type: "students",
        img: "assets/img/members/s014.jpeg",
        name_ko: "송서하",
        name_en: "Seoha Song",
        status1: "M.S. Student",
        status2: 2,
        mail: "tisutoo@korea.ac.kr",
        CV: null,
        research_areas: "NLP, Deep Learning",
        BS: "School of Industrial Management Engineering & Finance Engineering, Korea University, 2017",
        MS: null,
        career: null,
        current: null,
        admission: "September 1, 2017"
    },
    {
        type: "students",
        img: "assets/img/members/s015.jpeg",
        name_ko: "최희정",
        name_en: "Choi Heejeong",
        status1: "M.S. Student",
        status2: 1,
        mail: "heejeong_choi@korea.ac.kr",
        CV: null,
        research_areas: "NLP, Deep Learning",
        BS: "Statistics, Ewha Womans University, 2017",
        MS: null,
        career: null,
        current: null,
        admission: "March 1, 2018"
    },
    {
        type: "students",
        img: "assets/img/members/s016.jpeg",
        name_ko: "양우식",
        name_en: "Woosik Yang",
        status1: "M.S. Student",
        status2: 1,
        mail: "woosik1505@korea.ac.kr",
        CV: null,
        research_areas: "NLP, Deep Learning, data analysis",
        BS: "Statistics, Korea University, 2017",
        MS: null,
        career: null,
        current: null,
        admission: "March 1, 2018"
    },
    {
        type: "students",
        img: "assets/img/members/s017.png",
        name_ko: "정민성",
        name_en: "Jeong Minsung",
        status1: "M.S. Student",
        status2: 1,
        mail: "wjdalstjd25@korea.ac.kr",
        CV: null,
        research_areas: "NLP",
        BS: "French Language and Literature, Korea University, 2017",
        MS: null,
        career: null,
        current: null,
        admission: "March 1, 2018"
    },
    {
        type: "alumni",
        img: "assets/img/members/a000.jpg",
        name_ko: "서동민",
        name_en: "Dongmin Seo",
        status1: "M.S.",
        status2: null,
        mail: null,
        CV: null,
        research_areas: null,
        BS: "Computer Science, Seoul Nat’l Univ. of Sci. & Tech., 2014",
        MS: "Data Science, Seoul Nat’l Univ. of Sci. & Tech., 2016",
        career: null,
        current: "Hyundai NGV, KOREA",
        admission: null
    },
    {
        type: "alumni",
        img: "assets/img/members/a001.png",
        name_ko: "김보섭",
        name_en: "Boseop Kim",
        status1: "M.S.",
        status2: null,
        mail: "svei89@korea.ac.kr",
        CV: null,
        research_areas: "Machine learning, Deep learning",
        BS: "Applied Statistics, Konkuk Univ., 2015",
        MS: "Industrial Management Engineering, Korea Univ, 2017",
        career: null,
        current: "KT Institute of Convenge Technology",
        admission: null
    }
];


/***/ }),

/***/ "./src/app/_services/display.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/display.service.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var utils_service_1 = __webpack_require__(/*! ./utils.service */ "./src/app/_services/utils.service.ts");
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./utils.service */ "./src/app/_services/utils.service.ts");
var DisplayService = /** @class */ (function () {
    function DisplayService(utilsService, platformId) {
        this.utilsService = utilsService;
        this.platformId = platformId;
    }
    DisplayService.prototype.set_default_display = function () {
        setTimeout(function () {
            $("a[href^='/']").click(function () {
                $(document).scrollTop(0);
                var nav = $('.navbar-responsive-collapse');
                nav.removeClass("in");
            });
        });
    };
    DisplayService.prototype.init_display = function () {
        var _this = this;
        var init = function () {
            var type = _this.utilsService.get_url_head();
            console.log(type);
            $("[data-category]").removeClass('active');
            $("[data-category=" + type + "]").addClass('active');
        };
        if (common_1.isPlatformBrowser(this.platformId)) {
            this.set_default_display();
            setTimeout(function () {
                App.init();
                FancyBox.initFancybox();
                StyleSwitcher.initStyleSwitcher();
                $("#loading-ui").fadeOut();
                init();
                $("a[href^='/']").click(function () { init(); });
            });
        }
    };
    DisplayService.prototype.set_main_display = function () {
        if (common_1.isPlatformBrowser(this.platformId)) {
            this.set_default_display();
            setTimeout(function () {
                OwlCarousel.initOwlCarousel();
                ParallaxSlider.initParallaxSlider();
                $("a[data-section]").click(function (e) {
                    var id = $(e.target).data('section');
                    var scroll_top = $("div[data-section=" + id + "]").offset().top;
                    $(document).scrollTop(scroll_top - 100);
                });
            });
        }
    };
    DisplayService.prototype.set_members_display = function () {
        var _this = this;
        if (common_1.isPlatformBrowser(this.platformId)) {
            this.set_default_display();
            setTimeout(function () {
                var type = _this.utilsService.get_url_tail();
                $("li.list-group-item > a[href='/members/" + type + "']")
                    .parent().addClass("active");
                $("a[href^='/members/']").click(function () {
                    var type = _this.utilsService.get_url_tail();
                    $("li.list-group-item").removeClass("active");
                    $("li.list-group-item > a[href='/members/" + type + "']")
                        .parent().addClass("active");
                });
            });
        }
    };
    DisplayService.prototype.set_publications_display = function () {
        var _this = this;
        var init = function () {
            var type = _this.utilsService.get_url_tail();
            $("[data-type0]").removeClass('in');
            $("[data-type0=" + type + "]").addClass('in');
        };
        if (common_1.isPlatformBrowser(this.platformId)) {
            this.set_default_display();
            setTimeout(function () {
                init();
                $("a[href^='/publications/']").click(function () { init(); });
            });
        }
    };
    DisplayService.prototype.set_researches_display = function () {
        var init_scroll = function (doc, top_pad) {
            var nav = $("[data-nav]");
            var init_top = parseInt(nav.css('top'));
            doc.scroll(function () {
                var top = init_top - doc.scrollTop() - top_pad;
                if (top > 0) {
                    nav.css('top', top + top_pad);
                }
                else {
                    nav.css('top', top_pad);
                }
            });
        };
        var init_section = function (doc, top_pad) {
            $("a[data-section]").click(function (e) {
                var id = $(e.target).data('section');
                var scroll_top = $("div[data-section=" + id + "]").offset().top;
                doc.scrollTop(scroll_top - top_pad);
            });
        };
        if (common_1.isPlatformBrowser(this.platformId)) {
            this.set_default_display();
            setTimeout(function () {
                var doc = $(document);
                init_scroll(doc, 150);
                init_section(doc, 100);
            });
        }
    };
    DisplayService.prototype.set_board_display = function () {
        if (common_1.isPlatformBrowser(this.platformId)) {
            this.set_default_display();
            setTimeout(function () {
                $('#demo-in').click(function () {
                    $('[data-board-toggle]').removeClass('on');
                    $('[data-board-toggle=content]').addClass('on');
                });
                $('#dsba-back-btn').click(function () {
                    $('[data-board-toggle]').removeClass('on');
                    $('[data-board-toggle=menu]').addClass('on');
                });
            });
        }
    };
    DisplayService.ngInjectableDef = i0.defineInjectable({ factory: function DisplayService_Factory() { return new DisplayService(i0.inject(i1.UtilsService), i0.inject(i0.PLATFORM_ID)); }, token: DisplayService, providedIn: "root" });
    return DisplayService;
}());
exports.DisplayService = DisplayService;


/***/ }),

/***/ "./src/app/_services/utils.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/utils.service.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var database_service_1 = __webpack_require__(/*! ./database.service */ "./src/app/_services/database.service.ts");
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var UtilsService = /** @class */ (function () {
    function UtilsService(router) {
        this.router = router;
    }
    UtilsService.prototype.get_url_head = function () {
        var head = this.router.url.split("/")[1];
        return head;
    };
    UtilsService.prototype.get_url_tail = function () {
        var tail = this.router.url.split("/")[2];
        return tail;
    };
    UtilsService.prototype.group_list = function (size, list) {
        var groups = [];
        var group_idxs = [];
        var n_group = parseInt("" + list.length / size) + 1;
        for (var i = 0; i < n_group; i++) {
            groups.push([]);
            for (var i_ = 0; i_ < size; i_++)
                group_idxs.push(i);
        }
        for (var i = 0; i < list.length; i++) {
            groups[group_idxs[i]].push(list[i]);
        }
        return groups;
    };
    UtilsService.prototype.get_student_pairs = function (type) {
        var _this = this;
        return new Promise(function (resolve) {
            if (type == undefined) {
                resolve(_this.get_url_tail());
            }
            else {
                resolve(type);
            }
        }).then(function (type) {
            var pairs = [];
            var students = database_service_1.STUDENTS.filter(function (val) { return val.type == type; });
            pairs = _this.group_list(2, students);
            return [type, pairs];
        });
    };
    UtilsService.prototype.get_researches = function () {
        return database_service_1.RESEARCHES;
    };
    UtilsService.prototype.get_publications = function () {
        return database_service_1.PUBLICATIONS;
    };
    UtilsService.prototype.get_cooperations = function () {
        return database_service_1.COOPERATIONS;
    };
    UtilsService.prototype.get_projects = function () {
        return database_service_1.PROJECTS;
    };
    UtilsService.ngInjectableDef = i0.defineInjectable({ factory: function UtilsService_Factory() { return new UtilsService(i0.inject(i1.Router)); }, token: UtilsService, providedIn: "root" });
    return UtilsService;
}());
exports.UtilsService = UtilsService;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var main_component_1 = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
var members_component_1 = __webpack_require__(/*! ./members/members.component */ "./src/app/members/members.component.ts");
var overall_component_1 = __webpack_require__(/*! ./members/overall/overall.component */ "./src/app/members/overall/overall.component.ts");
var professor_component_1 = __webpack_require__(/*! ./members/professor/professor.component */ "./src/app/members/professor/professor.component.ts");
var students_component_1 = __webpack_require__(/*! ./members/students/students.component */ "./src/app/members/students/students.component.ts");
var researches_component_1 = __webpack_require__(/*! ./researches/researches.component */ "./src/app/researches/researches.component.ts");
var publications_component_1 = __webpack_require__(/*! ./publications/publications.component */ "./src/app/publications/publications.component.ts");
var projects_component_1 = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
var news_component_1 = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
var routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: main_component_1.MainComponent },
    { path: 'members', component: members_component_1.MembersComponent,
        children: [
            { path: '', redirectTo: 'overall', pathMatch: 'full' },
            { path: 'overall', component: overall_component_1.OverallComponent },
            { path: 'professor', component: professor_component_1.ProfessorComponent },
            { path: 'students', component: students_component_1.StudentsComponent },
            { path: 'alumni', component: students_component_1.StudentsComponent }
        ]
    },
    { path: 'researches', component: researches_component_1.ResearchesComponent },
    { path: 'projects', component: projects_component_1.ProjectsComponent },
    { path: 'publications', component: publications_component_1.PublicationsComponent,
        children: [
            { path: 'international-journal', component: publications_component_1.PublicationsComponent },
            { path: 'domestic-journal', component: publications_component_1.PublicationsComponent },
            { path: 'international-conference', component: publications_component_1.PublicationsComponent },
            { path: 'domestic-conference', component: publications_component_1.PublicationsComponent }
        ]
    },
    { path: 'news', component: news_component_1.NewsComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var i5 = __webpack_require__(/*! ./_services/display.service */ "./src/app/_services/display.service.ts");
var styles_AppComponent = [i0.styles];
var RenderType_AppComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AppComponent, data: {} });
exports.RenderType_AppComponent = RenderType_AppComponent;
function View_AppComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 168, "div", [["class", "wrapper"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 84, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 8, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 3, "a", [["class", "logo"], ["routerLink", "/main"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(4, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(5, 0, null, null, 0, "img", [["alt", "Logo"], ["height", "40"], ["src", "assets/img/custom/ku_logo.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "img", [["alt", "Logo"], ["height", "40"], ["src", "assets/img/custom/dsba_logo.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 3, "button", [["class", "navbar-toggle"], ["data-target", ".navbar-responsive-collapse"], ["data-toggle", "collapse"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Toggle navigation"])), (_l()(), i1.ɵeld(10, 0, null, null, 0, "span", [["class", "fa fa-bars"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 74, "div", [["class", "collapse navbar-collapse mega-menu navbar-responsive-collapse"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 73, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 72, "ul", [["class", "nav navbar-nav"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 23, "li", [["class", "dropdown"], ["data-category", "activities"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 1, "a", [["class", "dropdown-toggle"], ["data-toggle", "dropdown"], ["href", "javascript:void(0);"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" ACTIVITIES "])), (_l()(), i1.ɵeld(17, 0, null, null, 20, "ul", [["class", "dropdown-menu"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 2, "a", [["routerLink", "/news"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 20).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(20, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["News"])), (_l()(), i1.ɵeld(22, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Photos"])), (_l()(), i1.ɵeld(25, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Seminar"])), (_l()(), i1.ɵeld(28, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Youtube"])), (_l()(), i1.ɵeld(31, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(32, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Archive"])), (_l()(), i1.ɵeld(34, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(35, 0, null, null, 2, "a", [], null, null, null, null, null)), (_l()(), i1.ɵeld(36, 0, null, null, 0, "i", [["class", "rounded-x icon-eye"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" LINKS"])), (_l()(), i1.ɵeld(38, 0, null, null, 19, "li", [["class", "dropdown"], ["data-category", "members"]], null, null, null, null, null)), (_l()(), i1.ɵeld(39, 0, null, null, 1, "a", [["class", "dropdown-toggle"], ["data-toggle", "dropdown"], ["href", "javascript:void(0);"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" MEMBERS "])), (_l()(), i1.ɵeld(41, 0, null, null, 16, "ul", [["class", "dropdown-menu"]], null, null, null, null, null)), (_l()(), i1.ɵeld(42, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(43, 0, null, null, 2, "a", [["routerLink", "/members/overall"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 44).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(44, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Overall"])), (_l()(), i1.ɵeld(46, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(47, 0, null, null, 2, "a", [["routerLink", "/members/professor"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 48).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(48, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Professor"])), (_l()(), i1.ɵeld(50, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(51, 0, null, null, 2, "a", [["routerLink", "/members/students"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 52).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(52, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Students"])), (_l()(), i1.ɵeld(54, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(55, 0, null, null, 2, "a", [["routerLink", "/members/alumni"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 56).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(56, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Alumni"])), (_l()(), i1.ɵeld(58, 0, null, null, 19, "li", [["class", "dropdown"], ["data-category", "publications"]], null, null, null, null, null)), (_l()(), i1.ɵeld(59, 0, null, null, 1, "a", [["class", "dropdown-toggle"], ["data-toggle", "dropdown"], ["href", "javascript:void(0);"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" PUBLICATIONS "])), (_l()(), i1.ɵeld(61, 0, null, null, 16, "ul", [["class", "dropdown-menu"]], null, null, null, null, null)), (_l()(), i1.ɵeld(62, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(63, 0, null, null, 2, "a", [["routerLink", "/publications/international-journal"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 64).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(64, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["International Journal"])), (_l()(), i1.ɵeld(66, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(67, 0, null, null, 2, "a", [["routerLink", "/publications/domestic-journal"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 68).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(68, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Domestic Journal"])), (_l()(), i1.ɵeld(70, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(71, 0, null, null, 2, "a", [["routerLink", "/publications/international-conference"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 72).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(72, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["International Conference"])), (_l()(), i1.ɵeld(74, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(75, 0, null, null, 2, "a", [["routerLink", "/publications/domestic-conference"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 76).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(76, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Domestic Conference"])), (_l()(), i1.ɵeld(78, 0, null, null, 3, "li", [["data-category", "projects"]], null, null, null, null, null)), (_l()(), i1.ɵeld(79, 0, null, null, 2, "a", [["routerLink", "/projects"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 80).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(80, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, [" PROJECTS "])), (_l()(), i1.ɵeld(82, 0, null, null, 3, "li", [["data-category", "researches"]], null, null, null, null, null)), (_l()(), i1.ɵeld(83, 0, null, null, 2, "a", [["routerLink", "/researches"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 84).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(84, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, [" RESEARCHES "])), (_l()(), i1.ɵeld(86, 0, null, null, 0, "div", [["id", "dsba-back-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(87, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i1.ɵdid(88, 212992, null, 0, i2.RouterOutlet, [i2.ChildrenOutletContexts, i1.ViewContainerRef, i1.ComponentFactoryResolver, [8, null], i1.ChangeDetectorRef], null, null), (_l()(), i1.ɵeld(89, 0, null, null, 79, "div", [["class", "footer-v1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(90, 0, null, null, 72, "div", [["class", "footer"]], null, null, null, null, null)), (_l()(), i1.ɵeld(91, 0, null, null, 71, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(92, 0, null, null, 70, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(93, 0, null, null, 9, "div", [["class", "col-md-3 md-margin-bottom-40"]], null, null, null, null, null)), (_l()(), i1.ɵeld(94, 0, null, null, 2, "a", [["routerLink", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 95).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(95, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(96, 0, null, null, 0, "img", [["class", "footer-logo"], ["height", "40"], ["id", "logo-footer"], ["src", "assets/img/custom/dsba_logo.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(97, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Data Science & Business Analytics Lab"])), (_l()(), i1.ɵeld(99, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["School of Industrial Management Engineering"])), (_l()(), i1.ɵeld(101, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["College of Engineering, Korea University"])), (_l()(), i1.ɵeld(103, 0, null, null, 20, "div", [["class", "col-md-3 md-margin-bottom-40"]], null, null, null, null, null)), (_l()(), i1.ɵeld(104, 0, null, null, 19, "div", [["class", "posts"]], null, null, null, null, null)), (_l()(), i1.ɵeld(105, 0, null, null, 2, "div", [["class", "headline"]], null, null, null, null, null)), (_l()(), i1.ɵeld(106, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Latest Posts"])), (_l()(), i1.ɵeld(108, 0, null, null, 15, "ul", [["class", "list-unstyled latest-list"]], null, null, null, null, null)), (_l()(), i1.ɵeld(109, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(110, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Incredible content"])), (_l()(), i1.ɵeld(112, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["May 8, 2014"])), (_l()(), i1.ɵeld(114, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(115, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Best shoots"])), (_l()(), i1.ɵeld(117, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["June 23, 2014"])), (_l()(), i1.ɵeld(119, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(120, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["New Terms and Conditions"])), (_l()(), i1.ɵeld(122, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["September 15, 2014"])), (_l()(), i1.ɵeld(124, 0, null, null, 24, "div", [["class", "col-md-3 md-margin-bottom-40"]], null, null, null, null, null)), (_l()(), i1.ɵeld(125, 0, null, null, 2, "div", [["class", "headline"]], null, null, null, null, null)), (_l()(), i1.ɵeld(126, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Useful Links"])), (_l()(), i1.ɵeld(128, 0, null, null, 20, "ul", [["class", "list-unstyled link-list"]], null, null, null, null, null)), (_l()(), i1.ɵeld(129, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(130, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["About us"])), (_l()(), i1.ɵeld(132, 0, null, null, 0, "i", [["class", "fa fa-angle-right"]], null, null, null, null, null)), (_l()(), i1.ɵeld(133, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(134, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Portfolio"])), (_l()(), i1.ɵeld(136, 0, null, null, 0, "i", [["class", "fa fa-angle-right"]], null, null, null, null, null)), (_l()(), i1.ɵeld(137, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(138, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Latest jobs"])), (_l()(), i1.ɵeld(140, 0, null, null, 0, "i", [["class", "fa fa-angle-right"]], null, null, null, null, null)), (_l()(), i1.ɵeld(141, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(142, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Community"])), (_l()(), i1.ɵeld(144, 0, null, null, 0, "i", [["class", "fa fa-angle-right"]], null, null, null, null, null)), (_l()(), i1.ɵeld(145, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(146, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Contact us"])), (_l()(), i1.ɵeld(148, 0, null, null, 0, "i", [["class", "fa fa-angle-right"]], null, null, null, null, null)), (_l()(), i1.ɵeld(149, 0, null, null, 13, "div", [["class", "col-md-3 map-img md-margin-bottom-40"]], null, null, null, null, null)), (_l()(), i1.ɵeld(150, 0, null, null, 2, "div", [["class", "headline"]], null, null, null, null, null)), (_l()(), i1.ɵeld(151, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Contact Us"])), (_l()(), i1.ɵeld(153, 0, null, null, 9, "address", [["class", "md-margin-bottom-40"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \uB300\uD55C\uBBFC\uAD6D \uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC131\uBD81\uAD6C \uC548\uC554\uB85C 145 "])), (_l()(), i1.ɵeld(155, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \uACE0\uB824\uB300\uD559\uAD50 \uC2E0\uACF5\uD559\uAD00 220\uD638 "])), (_l()(), i1.ɵeld(157, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Tel: +82-(0)2-3290-3775 "])), (_l()(), i1.ɵeld(159, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Email: "])), (_l()(), i1.ɵeld(161, 0, null, null, 1, "a", [["class", ""], ["href", "mailto:dsba@korea.ac.kr"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["pilsung_kang@korea.ac.kr"])), (_l()(), i1.ɵeld(163, 0, null, null, 5, "div", [["class", "copyright"]], null, null, null, null, null)), (_l()(), i1.ɵeld(164, 0, null, null, 4, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(165, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(166, 0, null, null, 2, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(167, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" 2018 \u00A9 Data Science & Business Analytics Lab. "])), (_l()(), i1.ɵeld(169, 0, null, null, 0, "div", [["id", "loading-ui"]], null, null, null, null, null))], function (_ck, _v) { var currVal_2 = "/main"; _ck(_v, 4, 0, currVal_2); var currVal_5 = "/news"; _ck(_v, 20, 0, currVal_5); var currVal_8 = "/members/overall"; _ck(_v, 44, 0, currVal_8); var currVal_11 = "/members/professor"; _ck(_v, 48, 0, currVal_11); var currVal_14 = "/members/students"; _ck(_v, 52, 0, currVal_14); var currVal_17 = "/members/alumni"; _ck(_v, 56, 0, currVal_17); var currVal_20 = "/publications/international-journal"; _ck(_v, 64, 0, currVal_20); var currVal_23 = "/publications/domestic-journal"; _ck(_v, 68, 0, currVal_23); var currVal_26 = "/publications/international-conference"; _ck(_v, 72, 0, currVal_26); var currVal_29 = "/publications/domestic-conference"; _ck(_v, 76, 0, currVal_29); var currVal_32 = "/projects"; _ck(_v, 80, 0, currVal_32); var currVal_35 = "/researches"; _ck(_v, 84, 0, currVal_35); _ck(_v, 88, 0); var currVal_38 = ""; _ck(_v, 95, 0, currVal_38); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 4).target; var currVal_1 = i1.ɵnov(_v, 4).href; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵnov(_v, 20).target; var currVal_4 = i1.ɵnov(_v, 20).href; _ck(_v, 19, 0, currVal_3, currVal_4); var currVal_6 = i1.ɵnov(_v, 44).target; var currVal_7 = i1.ɵnov(_v, 44).href; _ck(_v, 43, 0, currVal_6, currVal_7); var currVal_9 = i1.ɵnov(_v, 48).target; var currVal_10 = i1.ɵnov(_v, 48).href; _ck(_v, 47, 0, currVal_9, currVal_10); var currVal_12 = i1.ɵnov(_v, 52).target; var currVal_13 = i1.ɵnov(_v, 52).href; _ck(_v, 51, 0, currVal_12, currVal_13); var currVal_15 = i1.ɵnov(_v, 56).target; var currVal_16 = i1.ɵnov(_v, 56).href; _ck(_v, 55, 0, currVal_15, currVal_16); var currVal_18 = i1.ɵnov(_v, 64).target; var currVal_19 = i1.ɵnov(_v, 64).href; _ck(_v, 63, 0, currVal_18, currVal_19); var currVal_21 = i1.ɵnov(_v, 68).target; var currVal_22 = i1.ɵnov(_v, 68).href; _ck(_v, 67, 0, currVal_21, currVal_22); var currVal_24 = i1.ɵnov(_v, 72).target; var currVal_25 = i1.ɵnov(_v, 72).href; _ck(_v, 71, 0, currVal_24, currVal_25); var currVal_27 = i1.ɵnov(_v, 76).target; var currVal_28 = i1.ɵnov(_v, 76).href; _ck(_v, 75, 0, currVal_27, currVal_28); var currVal_30 = i1.ɵnov(_v, 80).target; var currVal_31 = i1.ɵnov(_v, 80).href; _ck(_v, 79, 0, currVal_30, currVal_31); var currVal_33 = i1.ɵnov(_v, 84).target; var currVal_34 = i1.ɵnov(_v, 84).href; _ck(_v, 83, 0, currVal_33, currVal_34); var currVal_36 = i1.ɵnov(_v, 95).target; var currVal_37 = i1.ɵnov(_v, 95).href; _ck(_v, 94, 0, currVal_36, currVal_37); }); }
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), i1.ɵdid(1, 114688, null, 0, i4.AppComponent, [i5.DisplayService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
var AppComponentNgFactory = i1.ɵccf("app-root", i4.AppComponent, View_AppComponent_Host_0, {}, {}, []);
exports.AppComponentNgFactory = AppComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["#loading-ui[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  background: black;\n  z-index: 100; }\n\n#dsba-back-header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 84px; }\n\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var display_service_1 = __webpack_require__(/*! ./_services/display.service */ "./src/app/_services/display.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(displayService) {
        this.displayService = displayService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.displayService.init_display();
    };
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
var i2 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var i3 = __webpack_require__(/*! ./main/main.component.ngfactory */ "./src/app/main/main.component.ngfactory.js");
var i4 = __webpack_require__(/*! ./members/members.component.ngfactory */ "./src/app/members/members.component.ngfactory.js");
var i5 = __webpack_require__(/*! ./members/overall/overall.component.ngfactory */ "./src/app/members/overall/overall.component.ngfactory.js");
var i6 = __webpack_require__(/*! ./members/professor/professor.component.ngfactory */ "./src/app/members/professor/professor.component.ngfactory.js");
var i7 = __webpack_require__(/*! ./members/students/students.component.ngfactory */ "./src/app/members/students/students.component.ngfactory.js");
var i8 = __webpack_require__(/*! ./researches/researches.component.ngfactory */ "./src/app/researches/researches.component.ngfactory.js");
var i9 = __webpack_require__(/*! ./projects/projects.component.ngfactory */ "./src/app/projects/projects.component.ngfactory.js");
var i10 = __webpack_require__(/*! ./publications/publications.component.ngfactory */ "./src/app/publications/publications.component.ngfactory.js");
var i11 = __webpack_require__(/*! ./news/news.component.ngfactory */ "./src/app/news/news.component.ngfactory.js");
var i12 = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
var i13 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i14 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i15 = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
var i16 = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
var i17 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i18 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i19 = __webpack_require__(/*! ./_services/utils.service */ "./src/app/_services/utils.service.ts");
var i20 = __webpack_require__(/*! ./_services/display.service */ "./src/app/_services/display.service.ts");
var i21 = __webpack_require__(/*! ./_services/database.service */ "./src/app/_services/database.service.ts");
var i22 = __webpack_require__(/*! @angular/http */ "@angular/http");
var i23 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i24 = __webpack_require__(/*! @angular/animations */ "@angular/animations");
var i25 = __webpack_require__(/*! @nguniversal/module-map-ngfactory-loader */ "@nguniversal/module-map-ngfactory-loader");
var i26 = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
var i27 = __webpack_require__(/*! ./members/members.component */ "./src/app/members/members.component.ts");
var i28 = __webpack_require__(/*! ./members/overall/overall.component */ "./src/app/members/overall/overall.component.ts");
var i29 = __webpack_require__(/*! ./members/professor/professor.component */ "./src/app/members/professor/professor.component.ts");
var i30 = __webpack_require__(/*! ./members/students/students.component */ "./src/app/members/students/students.component.ts");
var i31 = __webpack_require__(/*! ./researches/researches.component */ "./src/app/researches/researches.component.ts");
var i32 = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
var i33 = __webpack_require__(/*! ./publications/publications.component */ "./src/app/publications/publications.component.ts");
var i34 = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
var i35 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var i36 = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
var AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.MainComponentNgFactory, i4.MembersComponentNgFactory, i5.OverallComponentNgFactory, i6.ProfessorComponentNgFactory, i7.StudentsComponentNgFactory, i8.ResearchesComponentNgFactory, i9.ProjectsComponentNgFactory, i10.PublicationsComponentNgFactory, i11.NewsComponentNgFactory, i12.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_l, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i13.NgLocalization, i13.NgLocaleLocalization, [i0.LOCALE_ID, [2, i13.ɵangular_packages_common_common_a]]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_j, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_k, []), i0.ɵmpd(4608, i14.DomSanitizer, i14.ɵangular_packages_platform_browser_platform_browser_e, [i13.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i14.DomSanitizer]), i0.ɵmpd(4608, i14.HAMMER_GESTURE_CONFIG, i14.HammerGestureConfig, []), i0.ɵmpd(5120, i14.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p1_0, p2_0, p2_1, p2_2) { return [new i14.ɵDomEventsPlugin(p0_0, p0_1), new i14.ɵKeyEventsPlugin(p1_0), new i14.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2)]; }, [i13.DOCUMENT, i0.NgZone, i13.DOCUMENT, i13.DOCUMENT, i14.HAMMER_GESTURE_CONFIG, i0.ɵConsole]), i0.ɵmpd(4608, i14.EventManager, i14.EventManager, [i14.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i14.ɵDomSharedStylesHost, i14.ɵDomSharedStylesHost, [i13.DOCUMENT]), i0.ɵmpd(4608, i14.ɵDomRendererFactory2, i14.ɵDomRendererFactory2, [i14.EventManager, i14.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i15.ɵangular_packages_platform_server_platform_server_c, i15.ɵangular_packages_platform_server_platform_server_c, [i14.DOCUMENT, [2, i14.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i14.ɵSharedStylesHost, null, [i15.ɵangular_packages_platform_server_platform_server_c]), i0.ɵmpd(4608, i15.ɵServerRendererFactory2, i15.ɵServerRendererFactory2, [i0.NgZone, i14.DOCUMENT, i14.ɵSharedStylesHost]), i0.ɵmpd(4608, i16.AnimationDriver, i16.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i16.ɵAnimationStyleNormalizer, i17.ɵangular_packages_platform_browser_animations_animations_c, []), i0.ɵmpd(4608, i16.ɵAnimationEngine, i17.ɵangular_packages_platform_browser_animations_animations_a, [i16.AnimationDriver, i16.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i15.ɵangular_packages_platform_server_platform_server_a, [i15.ɵServerRendererFactory2, i16.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i14.Meta, i14.Meta, [i13.DOCUMENT]), i0.ɵmpd(4608, i14.Title, i14.Title, [i13.DOCUMENT]), i0.ɵmpd(5120, i18.ActivatedRoute, i18.ɵangular_packages_router_router_f, [i18.Router]), i0.ɵmpd(4608, i18.NoPreloading, i18.NoPreloading, []), i0.ɵmpd(6144, i18.PreloadingStrategy, null, [i18.NoPreloading]), i0.ɵmpd(135680, i18.RouterPreloader, i18.RouterPreloader, [i18.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i18.PreloadingStrategy]), i0.ɵmpd(4608, i18.PreloadAllModules, i18.PreloadAllModules, []), i0.ɵmpd(5120, i18.ROUTER_INITIALIZER, i18.ɵangular_packages_router_router_i, [i18.ɵangular_packages_router_router_g]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i18.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i19.UtilsService, i19.UtilsService, [i18.Router]), i0.ɵmpd(4608, i20.DisplayService, i20.DisplayService, [i19.UtilsService, i0.PLATFORM_ID]), i0.ɵmpd(4608, i21.DatabaseService, i21.DatabaseService, []), i0.ɵmpd(4608, i22.BrowserXhr, i15.ɵangular_packages_platform_server_platform_server_d, []), i0.ɵmpd(4608, i22.ResponseOptions, i22.BaseResponseOptions, []), i0.ɵmpd(4608, i22.XSRFStrategy, i15.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i22.XHRBackend, i22.XHRBackend, [i22.BrowserXhr, i22.ResponseOptions, i22.XSRFStrategy]), i0.ɵmpd(4608, i22.RequestOptions, i22.BaseRequestOptions, []), i0.ɵmpd(5120, i22.Http, i15.ɵangular_packages_platform_server_platform_server_f, [i22.XHRBackend, i22.RequestOptions]), i0.ɵmpd(4608, i23.HttpXsrfTokenExtractor, i23.ɵangular_packages_common_http_http_h, [i13.DOCUMENT, i0.PLATFORM_ID, i23.ɵangular_packages_common_http_http_f]), i0.ɵmpd(4608, i23.ɵangular_packages_common_http_http_i, i23.ɵangular_packages_common_http_http_i, [i23.HttpXsrfTokenExtractor, i23.ɵangular_packages_common_http_http_g]), i0.ɵmpd(5120, i23.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i23.ɵangular_packages_common_http_http_i]), i0.ɵmpd(4608, i23.XhrFactory, i15.ɵangular_packages_platform_server_platform_server_d, []), i0.ɵmpd(4608, i23.HttpXhrBackend, i23.HttpXhrBackend, [i23.XhrFactory]), i0.ɵmpd(6144, i23.HttpBackend, null, [i23.HttpXhrBackend]), i0.ɵmpd(5120, i23.HttpHandler, i15.ɵangular_packages_platform_server_platform_server_g, [i23.HttpBackend, [2, i23.HTTP_INTERCEPTORS]]), i0.ɵmpd(4608, i23.HttpClient, i23.HttpClient, [i23.HttpHandler]), i0.ɵmpd(4608, i23.ɵangular_packages_common_http_http_e, i23.ɵangular_packages_common_http_http_e, []), i0.ɵmpd(4608, i24.AnimationBuilder, i17.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i14.DOCUMENT]), i0.ɵmpd(1073742336, i13.CommonModule, i13.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i14.ɵangular_packages_platform_browser_platform_browser_a, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i18.ɵangular_packages_router_router_b()]; }, []), i0.ɵmpd(512, i18.ɵangular_packages_router_router_g, i18.ɵangular_packages_router_router_g, [i0.Injector]), i0.ɵmpd(256, i0.APP_ID, "DSBA", []), i0.ɵmpd(2048, i14.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p2_0, p2_1, p2_2) { return [i14.ɵangular_packages_platform_browser_platform_browser_h(p0_0), i18.ɵangular_packages_router_router_h(p1_0), i14.ɵangular_packages_platform_browser_platform_browser_f(p2_0, p2_1, p2_2)]; }, [[2, i0.NgProbeToken], i18.ɵangular_packages_router_router_g, i14.ɵTRANSITION_ID, i13.DOCUMENT, i0.Injector]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i14.BrowserModule, i14.BrowserModule, [[3, i14.BrowserModule]]), i0.ɵmpd(1024, i18.ɵangular_packages_router_router_a, i18.ɵangular_packages_router_router_d, [[3, i18.Router]]), i0.ɵmpd(512, i18.UrlSerializer, i18.DefaultUrlSerializer, []), i0.ɵmpd(512, i18.ChildrenOutletContexts, i18.ChildrenOutletContexts, []), i0.ɵmpd(256, i18.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i13.LocationStrategy, i18.ɵangular_packages_router_router_c, [i13.PlatformLocation, [2, i13.APP_BASE_HREF], i18.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i13.Location, i13.Location, [i13.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i25.ModuleMapNgFactoryLoader, [i0.Compiler, i25.MODULE_MAP]), i0.ɵmpd(1024, i18.ROUTES, function () { return [[{ path: "", redirectTo: "/main", pathMatch: "full" }, { path: "main", component: i26.MainComponent }, { path: "members", component: i27.MembersComponent, children: [{ path: "", redirectTo: "overall", pathMatch: "full" }, { path: "overall", component: i28.OverallComponent }, { path: "professor", component: i29.ProfessorComponent }, { path: "students", component: i30.StudentsComponent }, { path: "alumni", component: i30.StudentsComponent }] }, { path: "researches", component: i31.ResearchesComponent }, { path: "projects", component: i32.ProjectsComponent }, { path: "publications", component: i33.PublicationsComponent, children: [{ path: "international-journal", component: i33.PublicationsComponent }, { path: "domestic-journal", component: i33.PublicationsComponent }, { path: "international-conference", component: i33.PublicationsComponent }, { path: "domestic-conference", component: i33.PublicationsComponent }] }, { path: "news", component: i34.NewsComponent }]]; }, []), i0.ɵmpd(1024, i18.Router, i18.ɵangular_packages_router_router_e, [i0.ApplicationRef, i18.UrlSerializer, i18.ChildrenOutletContexts, i13.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i18.ROUTES, i18.ROUTER_CONFIGURATION, [2, i18.UrlHandlingStrategy], [2, i18.RouteReuseStrategy]]), i0.ɵmpd(1073742336, i18.RouterModule, i18.RouterModule, [[2, i18.ɵangular_packages_router_router_a], [2, i18.Router]]), i0.ɵmpd(1073742336, i35.AppRoutingModule, i35.AppRoutingModule, []), i0.ɵmpd(1073742336, i36.AppModule, i36.AppModule, []), i0.ɵmpd(1073742336, i22.HttpModule, i22.HttpModule, []), i0.ɵmpd(1073742336, i23.HttpClientXsrfModule, i23.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i23.HttpClientModule, i23.HttpClientModule, []), i0.ɵmpd(1073742336, i17.NoopAnimationsModule, i17.NoopAnimationsModule, []), i0.ɵmpd(1073742336, i15.ServerModule, i15.ServerModule, []), i0.ɵmpd(1073742336, i25.ModuleMapLoaderModule, i25.ModuleMapLoaderModule, []), i0.ɵmpd(1073742336, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, []), i0.ɵmpd(256, i23.ɵangular_packages_common_http_http_f, "XSRF-TOKEN", []), i0.ɵmpd(256, i23.ɵangular_packages_common_http_http_g, "X-XSRF-TOKEN", []), i0.ɵmpd(256, i17.ANIMATION_MODULE_TYPE, "NoopAnimations", [])]); });
exports.AppServerModuleNgFactory = AppServerModuleNgFactory;


/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;


/***/ }),

/***/ "./src/app/main/main.component.ngfactory.js":
/*!**************************************************!*\
  !*** ./src/app/main/main.component.ngfactory.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./main.component.scss.shim.ngstyle */ "./src/app/main/main.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./main.component */ "./src/app/main/main.component.ts");
var i5 = __webpack_require__(/*! ../_services/display.service */ "./src/app/_services/display.service.ts");
var i6 = __webpack_require__(/*! ../_services/utils.service */ "./src/app/_services/utils.service.ts");
var styles_MainComponent = [i0.styles];
var RenderType_MainComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_MainComponent, data: {} });
exports.RenderType_MainComponent = RenderType_MainComponent;
function View_MainComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [["alt", ""]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/img/main/play.png"]], null, null, null, null, null))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "https://img.youtube.com/vi/", _v.context.$implicit, "/0.jpg"); _ck(_v, 1, 0, currVal_0); var currVal_1 = i1.ɵinlineInterpolate(1, "https://youtu.be/", _v.context.$implicit, ""); _ck(_v, 2, 0, currVal_1); }); }
function View_MainComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 14, "div", [["class", "col-md-3 col-sm-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 13, "div", [["class", "thumbnails thumbnail-style"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 5, "div", [["class", "thumbnail-img"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "div", [["class", "overflow-hidden"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 0, "img", [["alt", ""], ["class", "img-responsive"]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 2, "a", [["class", "btn-more"], ["routerLink", "/projects"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 6).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(6, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, [" read more + "])), (_l()(), i1.ɵeld(8, 0, null, null, 6, "div", [["class", "caption"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 3, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 2, "a", [["class", "hover-effect"], ["routerLink", "/projects"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 11).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(11, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Project"])), (_l()(), i1.ɵeld(13, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(14, null, ["", ""]))], function (_ck, _v) { var currVal_3 = "/projects"; _ck(_v, 6, 0, currVal_3); var currVal_6 = "/projects"; _ck(_v, 11, 0, currVal_6); }, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.img, ""); _ck(_v, 4, 0, currVal_0); var currVal_1 = i1.ɵnov(_v, 6).target; var currVal_2 = i1.ɵnov(_v, 6).href; _ck(_v, 5, 0, currVal_1, currVal_2); var currVal_4 = i1.ɵnov(_v, 11).target; var currVal_5 = i1.ɵnov(_v, 11).href; _ck(_v, 10, 0, currVal_4, currVal_5); var currVal_7 = _v.context.$implicit.title; _ck(_v, 14, 0, currVal_7); }); }
function View_MainComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, "div", [["class", "row margin-bottom-20"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_MainComponent_3)), i1.ɵdid(2, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_MainComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Donec id elit non mi porta gravida"]))], null, null); }
function View_MainComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [["alt", ""]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 2, "div", [["class", "carousel-caption"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "item ", _v.context.$implicit.active, ""); _ck(_v, 0, 0, currVal_0); var currVal_1 = i1.ɵinlineInterpolate(1, "assets/img/main/members/photo", _v.context.$implicit.id, ".jpg"); _ck(_v, 1, 0, currVal_1); var currVal_2 = _v.context.$implicit.description; _ck(_v, 4, 0, currVal_2); }); }
function View_MainComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 4, "figure", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "img", [["alt", ""]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 2, "div", [["class", "img-hover"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(5, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.img, ""); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.name; _ck(_v, 5, 0, currVal_1); }); }
function View_MainComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 23, "div", [["class", "slider-inner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 22, "div", [["class", "da-slider"], ["id", "da-slider"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 21, "div", [["class", "da-slide"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 8, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["DATA SCIENCE &"])), (_l()(), i1.ɵeld(6, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["BUSSINESS ANALYTICS"])), (_l()(), i1.ɵeld(9, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["LAB."])), (_l()(), i1.ɵeld(12, 0, null, null, 8, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["School of Industrial Management Engineering,"])), (_l()(), i1.ɵeld(15, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["College of Engineering,"])), (_l()(), i1.ɵeld(18, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Korea University"])), (_l()(), i1.ɵeld(21, 0, null, null, 2, "div", [["class", "da-img"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_MainComponent_1)), i1.ɵdid(23, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(24, 0, null, null, 6, "div", [["class", "container content-sm"]], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 5, "div", [["class", "title-v1 no-margin-bottom"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 4, "p", [["class", "no-margin-bottom"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \uACE0\uB824\uB300\uD559\uAD50 \uC0B0\uC5C5\uACBD\uC601\uACF5\uD559\uBD80 "])), (_l()(), i1.ɵeld(28, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\uB370\uC774\uD130\uACFC\uD559 \uBC0F \uBE44\uC988\uB2C8\uC2A4 \uC560\uB110\uB9AC\uD2F1\uC2A4(Data Science & Business Analytics; DSBA)"])), (_l()(), i1.ɵted(-1, null, [" \uC5F0\uAD6C\uC2E4 \uBC29\uBB38\uC744 \uD658\uC601\uD569\uB2C8\uB2E4. "])), (_l()(), i1.ɵeld(31, 0, null, null, 44, "div", [["class", "service-block-v4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(32, 0, null, null, 43, "div", [["class", "container content-sm"]], null, null, null, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 42, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(34, 0, null, null, 41, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(35, 0, null, null, 38, "div", [["class", "col-md-6 md-margin-bottom-30"]], null, null, null, null, null)), (_l()(), i1.ɵeld(36, 0, null, null, 1, "h2", [["class", "title-v2"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["ABOUT"])), (_l()(), i1.ɵeld(38, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \uBCF8 \uC5F0\uAD6C\uC2E4\uC5D0\uC11C\uB294 "])), (_l()(), i1.ɵeld(40, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\uB370\uC774\uD130\uACFC\uD559 \uBC0F \uBE44\uC988\uB2C8\uC2A4 \uC560\uB110\uB9AC\uD2F1\uC2A4"])), (_l()(), i1.ɵted(-1, null, [" \uC5F0\uAD6C \uBD84\uC57C\uC5D0 \uC0B0\uC5C5\uACF5\uD559\uC758 \uB2E4\uC591\uD55C \uBC30\uACBD \uC9C0\uC2DD\uC744 \uC811\uBAA9\uD558\uC5EC \uB2E4\uC591\uD55C \uC0B0\uD559\uC5F0 \uACF5\uB3D9\uC5F0\uAD6C\uB97C \uC218\uD589\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uACFC\uAC70 \uAE08\uC744 \uB9CC\uB4E4\uACE0\uC790 \uD588\uB358 \uC5F0\uAE08\uC220\uC0AC\uB4E4\uC758 \uB178\uB825\uC774 \uACFC\uD559\uC758 \uBC1C\uC804\uC744 \uC774\uB04C\uC5C8\uB4EF\uC774 DSBA \uC5F0\uAD6C\uC2E4\uC5D0\uC11C\uB294 \uC804\uBB38\uC131\uC744 \uAC16\uCD98 \uC11D/\uBC15\uC0AC \uC591\uC131 \uBC0F \uB2E4\uC591\uD55C \uBD84\uC57C \uC804\uBB38\uAC00 \uAD50\uC721\uC744 \uD1B5\uD574 \uBAA8\uB450\uAC00 \uAC00\uCE58 \uC788\uB294 \uC0B6\uC744 \uC0B4 \uC218 \uC788\uB294 \uC0AC\uD68C\uB97C \uB9CC\uB4DC\uB294\uB370 \uAE30\uC5EC\uD558\uACE0\uC790 \uD569\uB2C8\uB2E4. "])), (_l()(), i1.ɵeld(43, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(44, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \uC6B0\uB9AC\uB294 \uD604\uC7AC "])), (_l()(), i1.ɵeld(46, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\uBE45\uB370\uC774\uD130(Big Data)"])), (_l()(), i1.ɵted(-1, null, ["\uC640 "])), (_l()(), i1.ɵeld(49, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\uC0AC\uBB3C\uC778\uD130\uB137(Internet of Things; IoT)"])), (_l()(), i1.ɵted(-1, null, ["\uC73C\uB85C \uB300\uBCC0\uB418\uB294 \uB370\uC774\uD130 \uD64D\uC218\uC758 \uC2DC\uB300\uC5D0 \uC0B4\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC138\uACC4\uB294 \uC0AC\uB78C\uBFD0\uB9CC \uC544\uB2C8\uB77C \uBAA8\uB4E0 \uC0AC\uBB3C\uB4E4\uC774 \uC2DC\uAC04\uACFC \uC7A5\uC18C\uC5D0 \uAD6C\uC560 \uBC1B\uC9C0 \uC54A\uACE0 \uB124\uD2B8\uC6CC\uD06C\uB85C \uC5F0\uACB0\uB418\uB294 \uC0AC\uD68C\uC785\uB2C8\uB2E4. \uBCF8 \uC5F0\uAD6C\uC2E4\uC5D0\uC11C\uB294 \uC774\uC640 \uAC19\uC740 \uCD08\uC5F0\uACB0 \uC0AC\uD68C\uC5D0\uC11C \uC0B0\uC5C5 \uBC0F \uACF5\uACF5 \uBD84\uC57C\uC758 \uC815\uB7C9\uC801 \uB370\uC774\uD130 \uAE30\uBC18 \uC758\uC0AC\uACB0\uC815\uC744 \uC9C0\uC6D0\uD558\uAE30 \uC704\uD55C \uB2E4\uC591\uD55C \uBC29\uBC95\uB860\uC744 \uAC1C\uBC1C\uD558\uACE0 \uC774\uB97C \uC751\uC6A9\uD558\uB294 \uC5F0\uAD6C\uB97C \uC218\uD589\uD569\uB2C8\uB2E4. "])), (_l()(), i1.ɵeld(52, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(53, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \uBCF8 \uC5F0\uAD6C\uC2E4\uC5D0\uC11C\uB294 \uB370\uC774\uD130\uC758 "])), (_l()(), i1.ɵeld(55, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\uC218\uC9D1(Collect)-\uC800\uC7A5(Store)-\uAD00\uB9AC(Manage)-\uBD84\uC11D(Analyze)-\uD65C\uC6A9(Apply)"])), (_l()(), i1.ɵted(-1, null, ["\uC73C\uB85C \uC9C4\uD589\uB418\uB294 \uC77C\uB828\uC758 \uB370\uC774\uD130 \uACFC\uD559 \uD504\uB85C\uC138\uC2A4\uC758 \uD575\uC2EC \uC694\uC18C\uC778 \uBD84\uC11D \uB2E8\uACC4\uC5D0 \uD544\uC218\uC801\uC778 "])), (_l()(), i1.ɵeld(58, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Data Mining/Machine Learning"])), (_l()(), i1.ɵted(-1, null, [" \uC54C\uACE0\uB9AC\uC998\uC744 \uAC1C\uBC1C\uD558\uB294 \uC5F0\uAD6C\uB97C \uC218\uD589\uD569\uB2C8\uB2E4. "])), (_l()(), i1.ɵeld(61, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(62, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(63, 0, null, null, 10, "div", [["id", "dsba-intro-buttons"]], null, null, null, null, null)), (_l()(), i1.ɵeld(64, 0, null, null, 2, "a", [["class", "btn-u btn-brd btn-brd-hover btn-u-dark"], ["routerLink", "/researches"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 65).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(65, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Researches"])), (_l()(), i1.ɵeld(67, 0, null, null, 2, "a", [["class", "btn-u"], ["routerLink", "/projects"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 68).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(68, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Projects"])), (_l()(), i1.ɵeld(70, 0, null, null, 1, "a", [["class", "btn-u"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Youtube"])), (_l()(), i1.ɵeld(72, 0, null, null, 1, "a", [["class", "btn-u"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Github"])), (_l()(), i1.ɵeld(74, 0, null, null, 1, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(75, 0, null, null, 0, "img", [["alt", ""], ["class", "img-responsive"], ["src", "assets/img/main/intro.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(76, 0, null, null, 46, "div", [["class", "container content-sm"]], null, null, null, null, null)), (_l()(), i1.ɵeld(77, 0, null, null, 2, "div", [["class", "headline"]], null, null, null, null, null)), (_l()(), i1.ɵeld(78, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Recent Works"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_MainComponent_2)), i1.ɵdid(81, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(82, 0, null, null, 30, "div", [["class", "row margin-bottom-30"]], null, null, null, null, null)), (_l()(), i1.ɵeld(83, 0, null, null, 16, "div", [["class", "col-md-8 md-margin-bottom-40"]], null, null, null, null, null)), (_l()(), i1.ɵeld(84, 0, null, null, 2, "div", [["class", "headline"]], null, null, null, null, null)), (_l()(), i1.ɵeld(85, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Lab News"])), (_l()(), i1.ɵeld(87, 0, null, null, 9, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(88, 0, null, null, 1, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(89, 0, null, null, 0, "img", [["alt", ""], ["class", "img-responsive margin-bottom-20"], ["src", "assets/img/main/placeholder.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(90, 0, null, null, 6, "div", [["class", "col-sm-8"]], null, null, null, null, null)), (_l()(), i1.ɵeld(91, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["This is an incredibly beautiful responsive Bootstrap Template for corporate and creative professionals. It works on all major web browsers, tablets and phone."])), (_l()(), i1.ɵeld(93, 0, null, null, 3, "ul", [["class", "list-unstyled margin-bottom-20"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 2, null, View_MainComponent_4)), i1.ɵdid(95, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i1.ɵpad(96, 4), (_l()(), i1.ɵeld(97, 0, null, null, 2, "blockquote", [["class", "hero-unify"]], null, null, null, null, null)), (_l()(), i1.ɵeld(98, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Award winning digital agency. We bring a personal and effective approach to every project we work on, which is why. Unify is an incredibly beautiful responsive Bootstrap Template for corporate professionals."])), (_l()(), i1.ɵeld(100, 0, null, null, 12, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(101, 0, null, null, 2, "div", [["class", "headline"]], null, null, null, null, null)), (_l()(), i1.ɵeld(102, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Latest Shots"])), (_l()(), i1.ɵeld(104, 0, null, null, 8, "div", [["class", "carousel slide carousel-v1"], ["id", "myCarousel"]], null, null, null, null, null)), (_l()(), i1.ɵeld(105, 0, null, null, 2, "div", [["class", "carousel-inner"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_MainComponent_5)), i1.ɵdid(107, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(108, 0, null, null, 4, "div", [["class", "carousel-arrow"]], null, null, null, null, null)), (_l()(), i1.ɵeld(109, 0, null, null, 1, "a", [["class", "left carousel-control"], ["data-slide", "prev"], ["href", "#myCarousel"]], null, null, null, null, null)), (_l()(), i1.ɵeld(110, 0, null, null, 0, "i", [["class", "fa fa-angle-left"]], null, null, null, null, null)), (_l()(), i1.ɵeld(111, 0, null, null, 1, "a", [["class", "right carousel-control"], ["data-slide", "next"], ["href", "#myCarousel"]], null, null, null, null, null)), (_l()(), i1.ɵeld(112, 0, null, null, 0, "i", [["class", "fa fa-angle-right"]], null, null, null, null, null)), (_l()(), i1.ɵeld(113, 0, null, null, 9, "div", [["class", "container content job-partners"]], null, null, null, null, null)), (_l()(), i1.ɵeld(114, 0, null, null, 5, "div", [["class", "title-box-v2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(115, 0, null, null, 2, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵeld(116, 0, null, null, 1, "span", [["class", "color-green"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["cooperations"])), (_l()(), i1.ɵeld(118, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Academy, Project, Leture, Client - Relationship"])), (_l()(), i1.ɵeld(120, 0, null, null, 2, "ul", [["class", "list-inline our-clients"], ["id", "effect-2"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_MainComponent_6)), i1.ɵdid(122, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.vids; _ck(_v, 23, 0, currVal_0); var currVal_3 = "/researches"; _ck(_v, 65, 0, currVal_3); var currVal_6 = "/projects"; _ck(_v, 68, 0, currVal_6); var currVal_7 = _co.project_groups; _ck(_v, 81, 0, currVal_7); var currVal_8 = _ck(_v, 96, 0, 1, 2, 3, 4); _ck(_v, 95, 0, currVal_8); var currVal_9 = _co.latestShots; _ck(_v, 107, 0, currVal_9); var currVal_10 = _co.cooperations; _ck(_v, 122, 0, currVal_10); }, function (_ck, _v) { var currVal_1 = i1.ɵnov(_v, 65).target; var currVal_2 = i1.ɵnov(_v, 65).href; _ck(_v, 64, 0, currVal_1, currVal_2); var currVal_4 = i1.ɵnov(_v, 68).target; var currVal_5 = i1.ɵnov(_v, 68).href; _ck(_v, 67, 0, currVal_4, currVal_5); }); }
exports.View_MainComponent_0 = View_MainComponent_0;
function View_MainComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-main", [], null, null, null, View_MainComponent_0, RenderType_MainComponent)), i1.ɵdid(1, 114688, null, 0, i4.MainComponent, [i5.DisplayService, i6.UtilsService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_MainComponent_Host_0 = View_MainComponent_Host_0;
var MainComponentNgFactory = i1.ɵccf("app-main", i4.MainComponent, View_MainComponent_Host_0, {}, {}, []);
exports.MainComponentNgFactory = MainComponentNgFactory;


/***/ }),

/***/ "./src/app/main/main.component.scss.shim.ngstyle.js":
/*!**********************************************************!*\
  !*** ./src/app/main/main.component.scss.shim.ngstyle.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["#dsba-intro-buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 10px; }\n  #dsba-intro-buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3) {\n    background: #482525; }\n  #dsba-intro-buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(4) {\n    background: #605B5B; }\n  #da-slider[_ngcontent-%COMP%] {\n  background: #482525; }\n  #da-slider[_ngcontent-%COMP%]   .da-slide[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    z-index: 10;\n    width: 50%; }\n  #da-slider[_ngcontent-%COMP%]   .da-slide[_ngcontent-%COMP%]   .da-img[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    line-height: unset;\n    padding: 0 calc(25% - 250px) 0 calc(25% - 150px); }\n  #da-slider[_ngcontent-%COMP%]   .da-slide[_ngcontent-%COMP%]   .da-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n      width: 180px;\n      height: auto;\n      margin: 10px 10px; }\n  #da-slider[_ngcontent-%COMP%]   .da-slide[_ngcontent-%COMP%]   .da-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 100%; }\n  #da-slider[_ngcontent-%COMP%]   .da-slide[_ngcontent-%COMP%]   .da-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        position: absolute;\n        width: 50px;\n        height: auto;\n        -webkit-transform: translate(-115px, 50px);\n                transform: translate(-115px, 50px); }\n  #effect-2[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   .img-hover[_ngcontent-%COMP%] {\n  background-color: #395182; }\n  @media (max-width: 991px) {\n  #da-slider[_ngcontent-%COMP%]   .da-img[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: none; }\n  .service-block-v4[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: none; } }\n  .thumbnail-style[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #395182; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var display_service_1 = __webpack_require__(/*! ../_services/display.service */ "./src/app/_services/display.service.ts");
var utils_service_1 = __webpack_require__(/*! ../_services/utils.service */ "./src/app/_services/utils.service.ts");
var MainComponent = /** @class */ (function () {
    function MainComponent(displayService, utilsService) {
        this.displayService = displayService;
        this.utilsService = utilsService;
        this.vids = ["f9k5fxouO1Q", "rko6cb_Gq0k", "BiIlQQAx70c", "vHsa4tUErPg"];
        this.latestShots = [
            {
                id: 1,
                active: "active",
                description: "Facilisis odio, dapibus ac justo acilisis gestinas."
            },
            {
                id: 2,
                active: "",
                description: "Facilisis odio, dapibus ac justo acilisis gestinas."
            },
            {
                id: 3,
                active: "",
                description: "Facilisis odio, dapibus ac justo acilisis gestinas."
            },
            {
                id: 4,
                active: "",
                description: "Facilisis odio, dapibus ac justo acilisis gestinas."
            }
        ];
    }
    MainComponent.prototype.ngOnInit = function () {
        this.displayService.set_main_display();
        var projects = this.utilsService.get_projects();
        this.project_groups = this.utilsService.group_list(4, projects)
            .slice(0, 2);
        this.cooperations = this.utilsService.get_cooperations();
    };
    return MainComponent;
}());
exports.MainComponent = MainComponent;


/***/ }),

/***/ "./src/app/members/members.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/members/members.component.ngfactory.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./members.component.scss.shim.ngstyle */ "./src/app/members/members.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./members.component */ "./src/app/members/members.component.ts");
var i5 = __webpack_require__(/*! ../_services/display.service */ "./src/app/_services/display.service.ts");
var styles_MembersComponent = [i0.styles];
var RenderType_MembersComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_MembersComponent, data: {} });
exports.RenderType_MembersComponent = RenderType_MembersComponent;
function View_MembersComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "li", [["class", "list-group-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(3, null, ["", ""]))], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/members/", _v.context.$implicit, ""); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _v.context.$implicit; _ck(_v, 3, 0, currVal_3); }); }
function View_MembersComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 9, "div", [["class", "container content profile"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 3, "div", [["class", "col-md-3 md-margin-bottom-40"], ["id", "dsba-side-nav"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 2, "ul", [["class", "list-group sidebar-nav-v1 margin-bottom-40"], ["id", "sidebar-nav-1"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_MembersComponent_1)), i1.ɵdid(5, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(6, 0, null, null, 0, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 2, "div", [["class", "col-md-9"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i1.ɵdid(9, 212992, null, 0, i2.RouterOutlet, [i2.ChildrenOutletContexts, i1.ViewContainerRef, i1.ComponentFactoryResolver, [8, null], i1.ChangeDetectorRef], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.types; _ck(_v, 5, 0, currVal_0); _ck(_v, 9, 0); }, null); }
exports.View_MembersComponent_0 = View_MembersComponent_0;
function View_MembersComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-members", [], null, null, null, View_MembersComponent_0, RenderType_MembersComponent)), i1.ɵdid(1, 114688, null, 0, i4.MembersComponent, [i5.DisplayService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_MembersComponent_Host_0 = View_MembersComponent_Host_0;
var MembersComponentNgFactory = i1.ɵccf("app-members", i4.MembersComponent, View_MembersComponent_Host_0, {}, {}, []);
exports.MembersComponentNgFactory = MembersComponentNgFactory;


/***/ }),

/***/ "./src/app/members/members.component.scss.shim.ngstyle.js":
/*!****************************************************************!*\
  !*** ./src/app/members/members.component.scss.shim.ngstyle.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["li.list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-transform: capitalize; }\n\n@media (min-width: 992px) {\n  #dsba-side-nav[_ngcontent-%COMP%] {\n    position: fixed;\n    max-width: 250px;\n    width: calc(25% - 30px); } }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/members/members.component.ts":
/*!**********************************************!*\
  !*** ./src/app/members/members.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var display_service_1 = __webpack_require__(/*! ../_services/display.service */ "./src/app/_services/display.service.ts");
var MembersComponent = /** @class */ (function () {
    function MembersComponent(displayService) {
        this.displayService = displayService;
        this.types = ["overall", "professor", "students", "alumni"];
    }
    MembersComponent.prototype.ngOnInit = function () {
        this.displayService.set_members_display();
    };
    return MembersComponent;
}());
exports.MembersComponent = MembersComponent;


/***/ }),

/***/ "./src/app/members/overall/overall.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/members/overall/overall.component.ngfactory.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./overall.component.scss.shim.ngstyle */ "./src/app/members/overall/overall.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../professor/professor.component.ngfactory */ "./src/app/members/professor/professor.component.ngfactory.js");
var i3 = __webpack_require__(/*! ../professor/professor.component */ "./src/app/members/professor/professor.component.ts");
var i4 = __webpack_require__(/*! ../students/students.component.ngfactory */ "./src/app/members/students/students.component.ngfactory.js");
var i5 = __webpack_require__(/*! ../students/students.component */ "./src/app/members/students/students.component.ts");
var i6 = __webpack_require__(/*! ../../_services/utils.service */ "./src/app/_services/utils.service.ts");
var i7 = __webpack_require__(/*! ./overall.component */ "./src/app/members/overall/overall.component.ts");
var styles_OverallComponent = [i0.styles];
var RenderType_OverallComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_OverallComponent, data: {} });
exports.RenderType_OverallComponent = RenderType_OverallComponent;
function View_OverallComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-professor", [], null, null, null, i2.View_ProfessorComponent_0, i2.RenderType_ProfessorComponent)), i1.ɵdid(1, 114688, null, 0, i3.ProfessorComponent, [], null, null), (_l()(), i1.ɵeld(2, 0, null, null, 1, "app-students", [], null, null, null, i4.View_StudentsComponent_0, i4.RenderType_StudentsComponent)), i1.ɵdid(3, 114688, null, 0, i5.StudentsComponent, [i6.UtilsService], { student_type: [0, "student_type"] }, null), (_l()(), i1.ɵeld(4, 0, null, null, 1, "app-students", [], null, null, null, i4.View_StudentsComponent_0, i4.RenderType_StudentsComponent)), i1.ɵdid(5, 114688, null, 0, i5.StudentsComponent, [i6.UtilsService], { student_type: [0, "student_type"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_0 = _co.students; _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.alumni; _ck(_v, 5, 0, currVal_1); }, null); }
exports.View_OverallComponent_0 = View_OverallComponent_0;
function View_OverallComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-overall", [], null, null, null, View_OverallComponent_0, RenderType_OverallComponent)), i1.ɵdid(1, 114688, null, 0, i7.OverallComponent, [i1.PLATFORM_ID], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_OverallComponent_Host_0 = View_OverallComponent_Host_0;
var OverallComponentNgFactory = i1.ɵccf("app-overall", i7.OverallComponent, View_OverallComponent_Host_0, {}, {}, []);
exports.OverallComponentNgFactory = OverallComponentNgFactory;


/***/ }),

/***/ "./src/app/members/overall/overall.component.scss.shim.ngstyle.js":
/*!************************************************************************!*\
  !*** ./src/app/members/overall/overall.component.scss.shim.ngstyle.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/members/overall/overall.component.ts":
/*!******************************************************!*\
  !*** ./src/app/members/overall/overall.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var OverallComponent = /** @class */ (function () {
    function OverallComponent(platformId) {
        this.platformId = platformId;
        this.students = "students";
        this.alumni = "alumni";
    }
    OverallComponent.prototype.ngOnInit = function () {
        if (common_1.isPlatformBrowser(this.platformId)) {
            $("div.panel.panel-profile").css("display", "none");
            $("div.profile-bio.margin-bottom-40").removeClass("margin-bottom-40");
        }
    };
    return OverallComponent;
}());
exports.OverallComponent = OverallComponent;


/***/ }),

/***/ "./src/app/members/professor/professor.component.ngfactory.js":
/*!********************************************************************!*\
  !*** ./src/app/members/professor/professor.component.ngfactory.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./professor.component.scss.shim.ngstyle */ "./src/app/members/professor/professor.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./professor.component */ "./src/app/members/professor/professor.component.ts");
var styles_ProfessorComponent = [i0.styles];
var RenderType_ProfessorComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ProfessorComponent, data: {} });
exports.RenderType_ProfessorComponent = RenderType_ProfessorComponent;
function View_ProfessorComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 135, "div", [["class", "profile-body margin-bottom-20"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 18, "div", [["class", "profile-bio margin-bottom-40"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 17, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "div", [["class", "col-md-2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 0, "img", [["class", "img-responsive md-margin-bottom-10"], ["src", "assets/img/custom/professor.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 14, "div", [["class", "col-md-10"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\uAC15\uD544\uC131 (Pilsung Kang)"])), (_l()(), i1.ɵeld(8, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Assistant Professor"])), (_l()(), i1.ɵeld(11, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" School of Industrial Management Engineering, Korea University, Republic of Korea. "])), (_l()(), i1.ɵeld(14, 0, null, null, 4, "span", [], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 3, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" E-mail: "])), (_l()(), i1.ɵeld(17, 0, null, null, 1, "a", [["href", "mailto:pilsung_kang@korea.ac.kr"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" pilsung_kang@korea.ac.kr "])), (_l()(), i1.ɵeld(19, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 38, "div", [["class", "panel panel-profile"]], null, null, null, null, null)), (_l()(), i1.ɵeld(21, 0, null, null, 2, "div", [["class", "panel-heading overflow-h"]], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 1, "h2", [["class", "panel-title heading-sm pull-left"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Employment History"])), (_l()(), i1.ɵeld(24, 0, null, null, 34, "div", [["class", "panel-body margin-bottom-40"]], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 33, "ul", [["class", "timeline-v2 timeline-me"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 3, "time", [["class", "cbp_tmtime"], ["datetime", ""]], null, null, null, null, null)), (_l()(), i1.ɵeld(28, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["2015.03 ~ Present"])), (_l()(), i1.ɵeld(31, 0, null, null, 0, "i", [["class", "cbp_tmicon rounded-x hidden-xs"]], null, null, null, null, null)), (_l()(), i1.ɵeld(32, 0, null, null, 4, "div", [["class", "cbp_tmlabel"]], null, null, null, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Assistant Professor"])), (_l()(), i1.ɵeld(35, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["School of Industrial Management Engineering, Korea University"])), (_l()(), i1.ɵeld(37, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(38, 0, null, null, 3, "time", [["class", "cbp_tmtime"], ["datetime", ""]], null, null, null, null, null)), (_l()(), i1.ɵeld(39, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), i1.ɵeld(40, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["2011.03 ~ 2015.02"])), (_l()(), i1.ɵeld(42, 0, null, null, 0, "i", [["class", "cbp_tmicon rounded-x hidden-xs"]], null, null, null, null, null)), (_l()(), i1.ɵeld(43, 0, null, null, 4, "div", [["class", "cbp_tmlabel"]], null, null, null, null, null)), (_l()(), i1.ɵeld(44, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Assistant Professor"])), (_l()(), i1.ɵeld(46, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["ITM Programme, Seoul National University of Science & Technology"])), (_l()(), i1.ɵeld(48, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(49, 0, null, null, 3, "time", [["class", "cbp_tmtime"], ["datetime", ""]], null, null, null, null, null)), (_l()(), i1.ɵeld(50, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), i1.ɵeld(51, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["2010.03 ~ 2011.01"])), (_l()(), i1.ɵeld(53, 0, null, null, 0, "i", [["class", "cbp_tmicon rounded-x hidden-xs"]], null, null, null, null, null)), (_l()(), i1.ɵeld(54, 0, null, null, 4, "div", [["class", "cbp_tmlabel"]], null, null, null, null, null)), (_l()(), i1.ɵeld(55, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Manager"])), (_l()(), i1.ɵeld(57, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Customer Value Management (CVM) Planning Team, HyundaiCard Co."])), (_l()(), i1.ɵeld(59, 0, null, null, 31, "div", [["class", "panel panel-profile"]], null, null, null, null, null)), (_l()(), i1.ɵeld(60, 0, null, null, 2, "div", [["class", "panel-heading overflow-h"]], null, null, null, null, null)), (_l()(), i1.ɵeld(61, 0, null, null, 1, "h2", [["class", "panel-title heading-sm pull-left"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Education"])), (_l()(), i1.ɵeld(63, 0, null, null, 27, "div", [["class", "panel-body margin-bottom-40"]], null, null, null, null, null)), (_l()(), i1.ɵeld(64, 0, null, null, 26, "ul", [["class", "timeline-v2 timeline-me"]], null, null, null, null, null)), (_l()(), i1.ɵeld(65, 0, null, null, 14, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(66, 0, null, null, 3, "time", [["class", "cbp_tmtime"], ["datetime", ""]], null, null, null, null, null)), (_l()(), i1.ɵeld(67, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), i1.ɵeld(68, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["2003.03 ~ 2010.02"])), (_l()(), i1.ɵeld(70, 0, null, null, 0, "i", [["class", "cbp_tmicon rounded-x hidden-xs"]], null, null, null, null, null)), (_l()(), i1.ɵeld(71, 0, null, null, 8, "div", [["class", "cbp_tmlabel"]], null, null, null, null, null)), (_l()(), i1.ɵeld(72, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Ph.D"])), (_l()(), i1.ɵeld(74, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Industrial Engineering (Data Mining), Seoul National University."])), (_l()(), i1.ɵeld(76, 0, null, null, 3, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(77, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(78, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Ph.D Thesis: Locally linear reconstruction for prediction, detection, and clustering: Algorithms and their applications."])), (_l()(), i1.ɵeld(80, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(81, 0, null, null, 3, "time", [["class", "cbp_tmtime"], ["datetime", ""]], null, null, null, null, null)), (_l()(), i1.ɵeld(82, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), i1.ɵeld(83, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["1999.03 ~ 2003.02"])), (_l()(), i1.ɵeld(85, 0, null, null, 0, "i", [["class", "cbp_tmicon rounded-x hidden-xs"]], null, null, null, null, null)), (_l()(), i1.ɵeld(86, 0, null, null, 4, "div", [["class", "cbp_tmlabel"]], null, null, null, null, null)), (_l()(), i1.ɵeld(87, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["BS"])), (_l()(), i1.ɵeld(89, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Industrial Engineering, Seoul National University."])), (_l()(), i1.ɵeld(91, 0, null, null, 44, "div", [["class", "panel panel-profile"]], null, null, null, null, null)), (_l()(), i1.ɵeld(92, 0, null, null, 2, "div", [["class", "panel-heading overflow-h"]], null, null, null, null, null)), (_l()(), i1.ɵeld(93, 0, null, null, 1, "h2", [["class", "panel-title heading-sm pull-left"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Academic & Professional Activities"])), (_l()(), i1.ɵeld(95, 0, null, null, 40, "div", [["class", "panel-body margin-bottom-40"]], null, null, null, null, null)), (_l()(), i1.ɵeld(96, 0, null, null, 39, "ul", [["class", "custom-ul-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(97, 0, null, null, 15, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(98, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Reviewer: International Journals "])), (_l()(), i1.ɵeld(100, 0, null, null, 12, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(101, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(102, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Pattern Recognition"])), (_l()(), i1.ɵeld(104, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(105, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Computers & Security"])), (_l()(), i1.ɵeld(107, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(108, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["IEEE Transactions on Industrial Informatics"])), (_l()(), i1.ɵeld(110, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(111, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Annals of Operations Research"])), (_l()(), i1.ɵeld(113, 0, null, null, 9, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(114, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Reviewer: International Conferences "])), (_l()(), i1.ɵeld(116, 0, null, null, 6, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(117, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(118, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The 2011 IEEE International Conference on Robotics and Automation (ICRA 2011)"])), (_l()(), i1.ɵeld(120, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(121, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The 2nd International Conference on Biometrics (ICB 2007)"])), (_l()(), i1.ɵeld(123, 0, null, null, 12, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(124, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Miscellaneous "])), (_l()(), i1.ɵeld(126, 0, null, null, 9, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(127, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(128, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["2013.05 ~ Present: Invited Lecture on Big Data Analytics with R"])), (_l()(), i1.ɵeld(130, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(131, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["2012.09 ~ Present: Steering committee member, Korea Big Data Forum, sponsored by Korean Communications Commission."])), (_l()(), i1.ɵeld(133, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(134, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["2012.04 ~ 2012. 09: Senior assistant administrator, Research Committee on Human Errors in Railway Systems, sponsored by KORAIL."]))], null, null); }
exports.View_ProfessorComponent_0 = View_ProfessorComponent_0;
function View_ProfessorComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-professor", [], null, null, null, View_ProfessorComponent_0, RenderType_ProfessorComponent)), i1.ɵdid(1, 114688, null, 0, i2.ProfessorComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ProfessorComponent_Host_0 = View_ProfessorComponent_Host_0;
var ProfessorComponentNgFactory = i1.ɵccf("app-professor", i2.ProfessorComponent, View_ProfessorComponent_Host_0, {}, {}, []);
exports.ProfessorComponentNgFactory = ProfessorComponentNgFactory;


/***/ }),

/***/ "./src/app/members/professor/professor.component.scss.shim.ngstyle.js":
/*!****************************************************************************!*\
  !*** ./src/app/members/professor/professor.component.scss.shim.ngstyle.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".profile-bio[_ngcontent-%COMP%] {\n  padding: 15px 10px 15px 15px; }\n\n.profile-bio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: unset;\n  margin: 0;\n  text-align: left; }\n\nimg[src='assets/img/custom/professor.jpg'][_ngcontent-%COMP%] {\n  max-width: 100px; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/members/professor/professor.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/members/professor/professor.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var ProfessorComponent = /** @class */ (function () {
    function ProfessorComponent() {
    }
    ProfessorComponent.prototype.ngOnInit = function () {
    };
    return ProfessorComponent;
}());
exports.ProfessorComponent = ProfessorComponent;


/***/ }),

/***/ "./src/app/members/students/students.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/members/students/students.component.ngfactory.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./students.component.scss.shim.ngstyle */ "./src/app/members/students/students.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ./students.component */ "./src/app/members/students/students.component.ts");
var i4 = __webpack_require__(/*! ../../_services/utils.service */ "./src/app/_services/utils.service.ts");
var styles_StudentsComponent = [i0.styles];
var RenderType_StudentsComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_StudentsComponent, data: {} });
exports.RenderType_StudentsComponent = RenderType_StudentsComponent;
function View_StudentsComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(1, null, ["(", "\uD559\uAE30)"]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.status2; _ck(_v, 1, 0, currVal_0); }); }
function View_StudentsComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" / Curriculum Viate"]))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.parent.parent.context.$implicit.CV, ""); _ck(_v, 0, 0, currVal_0); }); }
function View_StudentsComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "span", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "a", [], [[8, "href", 4]], null, null, null, null)), (_l()(), i1.ɵted(2, null, ["", ""])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_StudentsComponent_6)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_2 = _v.parent.context.$implicit.CV; _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "mailto:", _v.parent.context.$implicit.mail, ""); _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.parent.context.$implicit.mail; _ck(_v, 2, 0, currVal_1); }); }
function View_StudentsComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["BS:"])), (_l()(), i1.ɵted(4, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.BS; _ck(_v, 4, 0, currVal_0); }); }
function View_StudentsComponent_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["MS:"])), (_l()(), i1.ɵted(4, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.MS; _ck(_v, 4, 0, currVal_0); }); }
function View_StudentsComponent_9(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Career:"])), (_l()(), i1.ɵted(4, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.career; _ck(_v, 4, 0, currVal_0); }); }
function View_StudentsComponent_10(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Admission:"])), (_l()(), i1.ɵted(4, null, [" ", " ~ Current"]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.admission; _ck(_v, 4, 0, currVal_0); }); }
function View_StudentsComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 27, "div", [["class", "col-sm-6 sm-margin-bottom-20"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 26, "div", [["class", "profile-blog"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "img", [["alt", ""]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 9, "div", [["class", "name-location"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(5, null, ["", " (", ")"])), (_l()(), i1.ɵeld(6, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(7, null, ["", ""])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_StudentsComponent_4)), i1.ɵdid(9, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(10, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_StudentsComponent_5)), i1.ɵdid(12, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(13, 0, null, null, 0, "div", [["class", "clearfix margin-bottom-20"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Research Areas:"])), (_l()(), i1.ɵted(17, null, [" ", ""])), (_l()(), i1.ɵeld(18, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 8, "ul", [["class", "list-inline share-list"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_StudentsComponent_7)), i1.ɵdid(21, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_StudentsComponent_8)), i1.ɵdid(23, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_StudentsComponent_9)), i1.ɵdid(25, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_StudentsComponent_10)), i1.ɵdid(27, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_4 = _v.context.$implicit.status2; _ck(_v, 9, 0, currVal_4); var currVal_5 = _v.context.$implicit.mail; _ck(_v, 12, 0, currVal_5); var currVal_7 = _v.context.$implicit.BS; _ck(_v, 21, 0, currVal_7); var currVal_8 = _v.context.$implicit.MS; _ck(_v, 23, 0, currVal_8); var currVal_9 = _v.context.$implicit.career; _ck(_v, 25, 0, currVal_9); var currVal_10 = _v.context.$implicit.admission; _ck(_v, 27, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.img, ""); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.name_ko; var currVal_2 = _v.context.$implicit.name_en; _ck(_v, 5, 0, currVal_1, currVal_2); var currVal_3 = _v.context.$implicit.status1; _ck(_v, 7, 0, currVal_3); var currVal_6 = _v.context.$implicit.research_areas; _ck(_v, 17, 0, currVal_6); }); }
function View_StudentsComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, "div", [["class", "row margin-bottom-20"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_StudentsComponent_3)), i1.ɵdid(2, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_StudentsComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "div", [["class", "profile-body margin-bottom-20"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "div", [["class", "panel-heading overflow-h margin-bottom-20"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "h2", [["class", "panel-title heading-sm pull-left"]], null, null, null, null, null)), (_l()(), i1.ɵted(3, null, ["", ""])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_StudentsComponent_2)), i1.ɵdid(5, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.student_pairs; _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.student_type; _ck(_v, 3, 0, currVal_0); }); }
function View_StudentsComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_StudentsComponent_1)), i1.ɵdid(1, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.student_type; _ck(_v, 1, 0, currVal_0); }, null); }
exports.View_StudentsComponent_0 = View_StudentsComponent_0;
function View_StudentsComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-students", [], null, null, null, View_StudentsComponent_0, RenderType_StudentsComponent)), i1.ɵdid(1, 114688, null, 0, i3.StudentsComponent, [i4.UtilsService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_StudentsComponent_Host_0 = View_StudentsComponent_Host_0;
var StudentsComponentNgFactory = i1.ɵccf("app-students", i3.StudentsComponent, View_StudentsComponent_Host_0, { student_type: "student_type" }, {}, []);
exports.StudentsComponentNgFactory = StudentsComponentNgFactory;


/***/ }),

/***/ "./src/app/members/students/students.component.scss.shim.ngstyle.js":
/*!**************************************************************************!*\
  !*** ./src/app/members/students/students.component.scss.shim.ngstyle.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".profile-body.margin-bottom-20[_ngcontent-%COMP%]    > .row.margin-bottom-20[_ngcontent-%COMP%]    > .col-sm-6.sm-margin-bottom-20[_ngcontent-%COMP%]   .profile-blog[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: auto; }\n\n.profile-body.margin-bottom-20[_ngcontent-%COMP%]    > .row.margin-bottom-20[_ngcontent-%COMP%]    > .col-sm-6.sm-margin-bottom-20[_ngcontent-%COMP%]   .profile-blog[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 13px; }\n\n.profile-body.margin-bottom-20[_ngcontent-%COMP%]    > .row.margin-bottom-20[_ngcontent-%COMP%]    > .col-sm-6.sm-margin-bottom-20[_ngcontent-%COMP%]   .profile-blog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 5px;\n  padding-left: 0px; }\n\n.profile-body.margin-bottom-20[_ngcontent-%COMP%]    > .row.margin-bottom-20[_ngcontent-%COMP%]    > .col-sm-6.sm-margin-bottom-20[_ngcontent-%COMP%]   .profile-blog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    width: 15px; }\n\n.profile-body[_ngcontent-%COMP%]   .panel-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-transform: capitalize; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/members/students/students.component.ts":
/*!********************************************************!*\
  !*** ./src/app/members/students/students.component.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var utils_service_1 = __webpack_require__(/*! ../../_services/utils.service */ "./src/app/_services/utils.service.ts");
var StudentsComponent = /** @class */ (function () {
    function StudentsComponent(utilsService) {
        this.utilsService = utilsService;
    }
    StudentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.utilsService
            .get_student_pairs(this.student_type)
            .then(function (val) { return _this.student_type = val[0], _this.student_pairs = val[1], val; });
    };
    return StudentsComponent;
}());
exports.StudentsComponent = StudentsComponent;


/***/ }),

/***/ "./src/app/news/news.component.ngfactory.js":
/*!**************************************************!*\
  !*** ./src/app/news/news.component.ngfactory.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./news.component.scss.shim.ngstyle */ "./src/app/news/news.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ./news.component */ "./src/app/news/news.component.ts");
var i4 = __webpack_require__(/*! ../_services/utils.service */ "./src/app/_services/utils.service.ts");
var i5 = __webpack_require__(/*! ../_services/display.service */ "./src/app/_services/display.service.ts");
var styles_NewsComponent = [i0.styles];
var RenderType_NewsComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_NewsComponent, data: {} });
exports.RenderType_NewsComponent = RenderType_NewsComponent;
function View_NewsComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "a", [["class", "fancybox img-hover-v2"], ["href", "assets/img/main/placeholder.jpg"], ["rel", "gallery"], ["title", "Image 1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 0, "img", [["alt", ""], ["class", "img-responsive"], ["src", "assets/img/main/placeholder.jpg"]], null, null, null, null, null))], null, null); }
function View_NewsComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "div", [["class", "breadcrumbs-v1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 4, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["DABA"])), (_l()(), i1.ɵeld(4, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["BOARD"])), (_l()(), i1.ɵeld(6, 0, null, null, 167, "div", [["class", "container content-md"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 166, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 46, "div", [["class", "col-md-9"], ["data-board-toggle", "content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 45, "div", [["class", "blog margin-bottom-40"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 3, "a", [], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 2, "div", [["id", "dsba-back-btn"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u2190"])), (_l()(), i1.ɵeld(14, 0, null, null, 2, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 1, "a", [["href", "blog_item_option1.html"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["2018 \uB300\uD55C\uC0B0\uC5C5\uACF5\uD559\uD68C \uCD98\uACC4\uD559\uC220\uB300\uD68C"])), (_l()(), i1.ɵeld(17, 0, null, null, 14, "div", [["class", "blog-post-tags"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 13, "ul", [["class", "list-unstyled list-inline blog-info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 0, "i", [["class", "fa fa-calendar"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" 2018. 04. 16."])), (_l()(), i1.ɵeld(22, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 0, "i", [["class", "fa fa-pencil"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Gyubin Son"])), (_l()(), i1.ɵeld(25, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 0, "i", [["class", "fa fa-comments"]], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["0 Comments"])), (_l()(), i1.ɵeld(29, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 0, "i", [["class", "fa fa-tags"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" News"])), (_l()(), i1.ɵeld(32, 0, null, null, 22, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" 2018 \uB300\uD55C\uC0B0\uC5C5\uACF5\uD559\uD68C \uCD98\uACC4\uD559\uC220\uB300\uD68C \uD6C4\uAE30 "])), (_l()(), i1.ɵeld(34, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(35, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \uC774\uBC88 \uD559\uD68C\uB294 \uC81C \uCCAB \uD559\uD68C\uC785\uB2C8\uB2E4. \uBC1C\uD45C\uB97C \uD558\uAC70\uB098 \uB17C\uBB38\uC744 \uC81C\uCD9C\uD558\uC9C4 \uC54A\uC558\uC9C0\uB9CC \uBD88\uACFC 1\uB144 \uC804\uB9CC \uD558\uB354\uB77C\uB3C4 \uD559\uD68C\uC5D0 \uCC38\uAC00\uD55C\uB2E4\uB294 \uAC83\uC744 \uC0C1\uC0C1\uB3C4 \uBABB\uD55C \uC800\uC5D0\uAC90 \uB9E4\uC6B0 \uD2B9\uBCC4\uD55C \uC2DC\uAC04\uC774\uC5C8\uC2B5\uB2C8\uB2E4. \uAD00\uC2EC \uBD84\uC57C\uC5D0 \uB300\uD574 \uCD5C\uB300\uD55C \uB9CE\uC774 \uB4E4\uC5B4\uBCF4\uB824 \uB178\uB825\uD588\uACE0 \uD559\uACC4\uC758 \uD2B8\uB80C\uB4DC\uB098 \uACF5\uBD80\uD558\uBA74 \uC88B\uC744 \uD0A4\uC6CC\uB4DC\uB4E4\uC744 \uB9CE\uC774 \uC54C\uAC8C \uB418\uC5B4 \uC88B\uC558\uC2B5\uB2C8\uB2E4. \uC800\uD76C \uC5F0\uAD6C\uC2E4 \uC18C\uC18D \uC5F0\uAD6C\uC6D0\uB4E4\uC758 \uBC1C\uD45C\uAC00 \uB9CE\uC544\uC11C \uAC01\uAC01 \uC18D\uD55C \uC138\uC158\uB4E4\uC5D0 \uCC38\uAC00\uD574\uC11C \uC5EC\uB7EC \uBC1C\uD45C\uB4E4\uC744 \uB4E4\uC5C8\uC2B5\uB2C8\uB2E4. "])), (_l()(), i1.ɵeld(37, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(38, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \uBA3C\uC800 \uAE40\uC900\uD64D \uBC15\uC0AC\uACFC\uC815\uC758 \"CAM\uACFC Grad-CAM \uAE30\uBC18\uC758 \uBD88\uB7C9 \uC6E8\uC774\uD37C bin map \uBD84\uB958 \uBC0F \uC6D0\uC778 \uC9C0\uC5ED \uC2DC\uAC01\uD654 \uBC29\uBC95\uB860\" \uBC1C\uD45C\uB97C \uB4E4\uC5C8\uC2B5\uB2C8\uB2E4. \uB525\uB7EC\uB2DD\uC774 \uAC00\uC7A5 \uC0B0\uC5C5\uACFC \uC9C1\uC811\uC801\uC73C\uB85C \uB9DE\uB2FF\uC544\uC788\uB294 \uBD84\uC57C\uB77C \uC0DD\uAC01\uD569\uB2C8\uB2E4. \uAE30\uC874\uC758 \uC5D4\uC9C0\uB2C8\uC5B4\uAC00 \uC9C1\uC811 \uBD88\uB7C9 \uC6E8\uC774\uD37C\uB97C \uBD84\uB958\uD558\uB358 \uBC29\uC2DD\uC744 \uC5B4\uB5BB\uAC8C \uC790\uB3D9\uD654\uD558\uACE0, \uC2DC\uAC01\uD654\uD588\uB294\uC9C0 \uC798 \uC54C \uC218 \uC788\uC5C8\uC2B5\uB2C8\uB2E4. \uC54C\uACE0\uB9AC\uC998\uC774 \uBD84\uB958\uB97C \uC798 \uD558\uB354\uB77C\uB3C4 \uADF8\uAC83\uC774 \"\uC65C \uADF8\uB807\uAC8C \uBD84\uB958\uD588\uB294\uC9C0\"\uB97C \uC54C\uC544\uC57C \uD604\uC9C1 \uC5D4\uC9C0\uB2C8\uC5B4\uB4E4\uC5D0\uAC8C \uC124\uBA85\uC744 \uD560 \uC218 \uC788\uB294\uB370 \uADF8\uAC78 \uC2DC\uAC01\uD654\uB85C \uC798 \uD574\uACB0\uD588\uC2B5\uB2C8\uB2E4. \uC790\uC5F0\uC5B4\uCC98\uB9AC\uB098 \uC74C\uC131, \uCEF4\uD4E8\uD130 \uBE44\uC804\uC774 \uD65C\uBC1C\uD558\uAC8C \uC5F0\uAD6C\uB418\uACE0 \uC788\uACE0, \uADF8\uB7F0 \uAE30\uBC18 \uC774\uB860\uB4E4\uC744 \uBC14\uD0D5\uC73C\uB85C \uC774\uB807\uAC8C \uC0B0\uC5C5\uC5D0 \uC801\uC6A9\uB418\uC5B4 \uC2E4\uC6A9\uC801\uC73C\uB85C \uC88B\uC740 \uACB0\uACFC\uB97C \uBCF4\uC774\uB294 \uAC83\uC774 \uC758\uBBF8\uAC00 \uD070 \uAC83 \uAC19\uC2B5\uB2C8\uB2E4. "])), (_l()(), i1.ɵeld(40, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(41, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \uC774\uD6C4\uC5D4 \uB2E4\uB978 \uC138\uC158\uC7A5\uC73C\uB85C \uC62E\uACA8 Business analytics \uBD84\uC57C\uC758 \uBC1C\uD45C\uB97C \uB4E4\uC5C8\uC2B5\uB2C8\uB2E4. \uC5F0\uC138\uB300\uD559\uAD50 \uC774\uACBD\uD0DD\uB2D8\uC758 \"DBSCAN\uACFC ensemble \uBC29\uBC95\uC744 \uC774\uC6A9\uD55C \uD558\uC774\uBE0C\uB9AC\uB4DC resampling \uBC29\uBC95\"\uC5D0 \uB300\uD55C \uBC1C\uD45C\uC600\uB294\uB370\uC694. \uD074\uB798\uC2A4 \uBD88\uADE0\uD615 \uB370\uC774\uD130\uC5D0\uC11C resampling\uD560 \uB54C minority \uD074\uB798\uC2A4\uB9CC \uACE0\uB824\uD558\uB294\uB370 \uADF8 \uC911\uC5D0\uC11C\uB3C4 DBSCAN\uC744 \uD65C\uC6A9\uD574 \uB178\uC774\uC988\uAC00 \uC544\uB2CC \uB370\uC774\uD130\uB9CC resampling \uD558\uB294 \uBC29\uBC95\uC785\uB2C8\uB2E4. \uB4E4\uC73C\uBA74\uC11C \uC88B\uC740 \uC811\uADFC\uC774\uAD6C\uB098 \uC0DD\uAC01\uD588\uACE0, \uC2E4\uC81C\uB85C\uB3C4 \uAD49\uC7A5\uD788 \uB9CE\uC740 \uC2E4\uD5D8\uC744 \uD1B5\uD574 \uB2E4\uB978 \uBAA8\uB378\uACFC \uBE44\uAD50\uD574\uC11C \uB354 \uB098\uC740 \uC131\uB2A5\uC744 \uB0B4\uB294 \uAC83\uC744 \uBCF4\uC600\uC2B5\uB2C8\uB2E4. \uC9C8\uBB38\uC5D0 \uB300\uD55C \uB300\uCC98\uB3C4 \uAE54\uB054\uD588\uACE0 \uB9E4\uC6B0 \uD6CC\uB96D\uD55C \uBC1C\uD45C\uC600\uC2B5\uB2C8\uB2E4. "])), (_l()(), i1.ɵeld(43, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(44, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \uC774\uD6C4 \uC11C\uC2B9\uC644 \uBC15\uC0AC\uACFC\uC815\uC758 \"Distance Decomposition for Variable Importance of Distance-based Novelty Detection\"\uACFC \"\uB525\uB7EC\uB2DD \uAE30\uBC18\uC758 \uAC10\uC131 \uBD84\uC11D\uC744 \uC704\uD55C \uBE44\uAD50 \uC5F0\uAD6C\"\uB97C \uC5F0\uB2EC\uC544 \uB4E4\uC5C8\uC2B5\uB2C8\uB2E4. \uCCAB \uBC88\uC9F8 \uBC1C\uD45C\uB294 novelty detection\uC5D0\uC11C \uC65C \uADF8\uB807\uAC8C \uBD84\uB958\uB418\uC5C8\uB294\uC9C0 distance decomposition\uC744 \uD1B5\uD574 score \uAC12\uC73C\uB85C \uC124\uBA85\uD558\uB294 \uB0B4\uC6A9\uC774\uC5C8\uACE0, \uB450 \uBC88\uC9F8 \uBC1C\uD45C\uB294 \uAC10\uC131\uBD84\uC11D\uC5D0\uC11C CNN\uACFC RNN \uAE30\uBC18 \uC544\uD0A4\uD14D\uCC98\uB4E4\uC774 \uAC01\uAC01 \uC5B4\uB5A4 \uC131\uB2A5\uC744 \uBCF4\uC774\uB294\uC9C0 \uB3D9\uC77C\uD55C \uC870\uAC74\uC5D0\uC11C \uB2E4\uC591\uD55C \uB370\uC774\uD130\uC5D0 \uB300\uD574 \uD559\uC2B5\uD55C \uACB0\uACFC\uC640 \uD574\uC11D\uC744 \uBCF4\uC5EC\uC8FC\uC5C8\uC2B5\uB2C8\uB2E4. \uCCAB \uBC88\uC9F8\uB294 \uACB0\uACFC\uB97C \uC124\uBA85\uD574\uB0B4\uB294 \uC0C8\uB85C\uC6B4 metric\uC744 \uC81C\uC2DC\uD588\uB2E4\uB294 \uC810\uC5D0\uC11C \uB9E4\uC6B0 \uC778\uC0C1\uAE4A\uC5C8\uACE0, \uB450 \uBC88\uC9F8\uB294 \uC2E0\uC785\uC0DD\uC758 \uC785\uC7A5\uC5D0\uC11C \uC218 \uBC31\uBC88\uC5D0 \uB2EC\uD558\uB294 \uD559\uC2B5 \uACB0\uACFC\uB97C \uD1B5\uD574 \uBAA8\uB378\uC744 \uBE44\uAD50\uD560 \uC218 \uC788\uC5C8\uB2E4\uB294 \uC810\uC5D0\uC11C \uD070 \uADF8\uB9BC\uC744 \uADF8\uB9AC\uB294\uB370 \uD070 \uB3C4\uC6C0\uC744 \uBC1B\uC558\uC2B5\uB2C8\uB2E4. "])), (_l()(), i1.ɵeld(46, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(47, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \uC774 \uC678\uC5D0\uB3C4 \uC7AC\uBC0C\uB294 \uBC1C\uD45C\uB4E4\uC744 \uB9CE\uC774 \uB4E4\uC5C8\uC2B5\uB2C8\uB2E4. \uC7A5\uBA85\uC900 \uC11D\uC0AC\uACFC\uC815\uC758 Semantic VAE\uC5D0\uC120 \uAE30\uC874 RNN-AE\uBCF4\uB2E4 \uC815\uC131\uC801\uC73C\uB85C \uB354 \uB098\uC740 \uACB0\uACFC\uB97C \uBCF4\uC774\uB294, \uC989 \uBAA8\uB378\uC774 \uC880 \uB354 \uC0AC\uB78C\uAC19\uC740 \uD574\uC11D\uC744 \uB0B4\uB294 \uAC83\uC774 \uC88B\uC558\uACE0, \uAE40\uD615\uC11D \uBC15\uC0AC\uACFC\uC815\uC758 \uB274\uC2A4\uAE30\uC0AC\uB97C \uD65C\uC6A9\uD55C Knowledge Base \uAD6C\uCD95\uC740 \uC811\uADFC \uC790\uCCB4\uAC00 \uB9E4\uC6B0 \uD765\uBBF8\uB85C\uC6E0\uACE0 \uC2E4\uC81C \uC0AC\uD68C\uC758 \uD558\uB8E8 \uD558\uB8E8\uB4E4\uC744 \uBCA1\uD130\uB85C \uAD6C\uC131\uD574 \uBE44\uC2B7\uD55C \uB0A0\uB4E4\uC744 \uD30C\uC545\uD560 \uC218 \uC788\uB2E4\uBA74 \uD560 \uC218 \uC788\uB294 \uAC83\uB4E4\uC774 \uAD49\uC7A5\uD788 \uB9CE\uC544\uC9C8 \uAC83 \uAC19\uC2B5\uB2C8\uB2E4. \uC2A4\uB9C8\uD2B8\uD329\uD1A0\uB9AC \uBD84\uC57C\uC5D0\uC120 \uAC15\uD654\uD559\uC2B5\uC744 \uC774\uC6A9\uD55C \uACF5\uC815 \uAC1C\uC120\uC774\uB098 GAN\uC744 \uC774\uC6A9\uD55C \uC6E8\uC774\uD37C \uBD84\uB958\uC5D0 \uB300\uD55C \uB0B4\uC6A9\uB4E4\uC774 \uB9CE\uC558\uACE0 \uC2E4\uBB34\uC9C4\uB4E4\uB3C4 \uB9CE\uC774 \uCC38\uC11D\uD574\uC11C \uC5F4\uB764 \uD1A0\uB860\uC744 \uBCF4\uC600\uC2B5\uB2C8\uB2E4. \uACE0\uB824\uB300\uD559\uAD50 \uAC15\uD604\uAD6C \uBC15\uC0AC\uACFC\uC815\uC758 \"Semi-supervised learning with end-to-end graph convolution\"\uB3C4 \uD765\uBBF8\uB86D\uAC8C \uB4E4\uC5C8\uB294\uB370\uC694. \uBAA8\uB378 \uC124\uBA85\uC5D0 \uC55E\uC11C \uAE30\uC874 \uBC29\uC2DD\uACFC \uC774\uB860\uC5D0 \uB300\uD574 \uC124\uBA85\uD574\uC8FC\uC154\uC11C \uC2E0\uC785\uC0DD\uC778 \uC800\uC5D0\uAC8C \uB9E4\uC6B0 \uC88B\uC558\uACE0 graph convolution\uC5D0 \uB300\uD574\uC11C \uB354 \uC790\uC138\uD788 \uC54C\uC544\uBD10\uC57C\uACA0\uB2E4\uB294 \uC0DD\uAC01\uC774 \uB4E4\uC5C8\uC2B5\uB2C8\uB2E4. "])), (_l()(), i1.ɵeld(49, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(50, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \uC704\uC758 \uD559\uD68C \uAD00\uB828 \uB0B4\uC6A9 \uC774\uC678\uC5D0\uB3C4 \uC5F0\uAD6C\uC6D0 \uC804\uC6D0\uC774 \uCC38\uC11D\uD574\uC11C \uAC19\uC774 \uC219\uC2DD\uD558\uBA70 \uC2DC\uAC04\uC744 \uB9CE\uC774 \uBCF4\uB0B4\uC11C \uC88B\uC558\uC2B5\uB2C8\uB2E4. \uAD50\uC218\uB2D8\uC774 \uADFC\uC0AC\uD55C \uC800\uB141\uB3C4 \uC0AC\uC8FC\uC154\uC11C \uB2E4\uB4E4 \uAD49\uC7A5\uD788 \uB9DB\uC788\uAC8C \uBA39\uC5C8\uC2B5\uB2C8\uB2E4. \uC5ED\uC2DC \uB9DB\uC788\uB294 \uC74C\uC2DD \uC55E\uC5D0\uC11C\uB294 \uB2E4\uB4E4 \uD45C\uC815\uC774 \uB354\uD560 \uB098\uC704\uC5C6\uC774 \uBC1D\uC558\uC2B5\uB2C8\uB2E4. \uC55E\uC73C\uB85C\uB3C4 \uB354 \uD568\uAED8 \uC88B\uC740 \uC2DC\uAC04\uB4E4 \uB9CE\uC774 \uBCF4\uB0B4\uACE0 \uD559\uD68C\uC5D0\uC11C \uC88B\uC740 \uC790\uADF9 \uBC1B\uC73C\uBA70 \uD6CC\uB96D\uD55C \uC5F0\uAD6C\uB97C \uD588\uC73C\uBA74 \uC88B\uACA0\uC2B5\uB2C8\uB2E4. "])), (_l()(), i1.ɵeld(52, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(53, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \uAC10\uC0AC\uD569\uB2C8\uB2E4. "])), (_l()(), i1.ɵeld(55, 0, null, null, 71, "div", [["class", "col-md-9 on"], ["data-board-toggle", "menu"]], null, null, null, null, null)), (_l()(), i1.ɵeld(56, 0, null, null, 27, "div", [["class", "row margin-bottom-20"]], null, null, null, null, null)), (_l()(), i1.ɵeld(57, 0, null, null, 26, "div", [["class", "col-sm-7 news-v3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(58, 0, null, null, 25, "div", [["class", "news-v3-in-sm no-padding"]], null, null, null, null, null)), (_l()(), i1.ɵeld(59, 0, null, null, 8, "ul", [["class", "list-inline posted-info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(60, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Gyubin Son"])), (_l()(), i1.ɵeld(62, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["In "])), (_l()(), i1.ɵeld(64, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["News"])), (_l()(), i1.ɵeld(66, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["2018. 04. 16."])), (_l()(), i1.ɵeld(68, 0, null, null, 2, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵeld(69, 0, null, null, 1, "a", [["id", "demo-in"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["2018 \uB300\uD55C\uC0B0\uC5C5\uACF5\uD559\uD68C \uCD98\uACC4\uD559\uC220\uB300\uD68C"])), (_l()(), i1.ɵeld(71, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["2018 \uB300\uD55C\uC0B0\uC5C5\uACF5\uD559\uD68C \uCD98\uACC4\uD559\uC220\uB300\uD68C \uD6C4\uAE30 \uC774\uBC88 \uD559\uD68C\uB294 \uC81C \uCCAB \uD559\uD68C\uC785\uB2C8\uB2E4. \uBC1C\uD45C\uB97C \uD558\uAC70\uB098 \uB17C\uBB38\uC744 \uC81C\uCD9C\uD558\uC9C4 \uC54A\uC558\uC9C0\uB9CC \uBD88\uACFC 1\uB144 \uC804\uB9CC \uD558\uB354\uB77C\uB3C4 \uD559\uD68C\uC5D0 \uCC38\uAC00\uD55C\uB2E4\uB294 \uAC83\uC744 \uC0C1\uC0C1\uB3C4 \uBABB\uD55C \uC800\uC5D0\uAC90 \uB9E4\uC6B0 \uD2B9\uBCC4\uD55C ..."])), (_l()(), i1.ɵeld(73, 0, null, null, 10, "ul", [["class", "post-shares"]], null, null, null, null, null)), (_l()(), i1.ɵeld(74, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(75, 0, null, null, 3, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵeld(76, 0, null, null, 0, "i", [["class", "rounded-x icon-speech"]], null, null, null, null, null)), (_l()(), i1.ɵeld(77, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["5"])), (_l()(), i1.ɵeld(79, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(80, 0, null, null, 3, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵeld(81, 0, null, null, 0, "i", [["class", "rounded-x icon-eye"]], null, null, null, null, null)), (_l()(), i1.ɵeld(82, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["247"])), (_l()(), i1.ɵeld(84, 0, null, null, 1, "div", [["class", "clearfix margin-bottom-20"]], null, null, null, null, null)), (_l()(), i1.ɵeld(85, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), i1.ɵeld(86, 0, null, null, 29, "div", [["class", "row margin-bottom-20"]], null, null, null, null, null)), (_l()(), i1.ɵeld(87, 0, null, null, 25, "div", [["class", "col-sm-7 news-v3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(88, 0, null, null, 24, "div", [["class", "news-v3-in-sm no-padding"]], null, null, null, null, null)), (_l()(), i1.ɵeld(89, 0, null, null, 8, "ul", [["class", "list-inline posted-info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(90, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\uAE40\uD574\uB3D9"])), (_l()(), i1.ɵeld(92, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["In "])), (_l()(), i1.ɵeld(94, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Youtube"])), (_l()(), i1.ɵeld(96, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["2017. 7. 22."])), (_l()(), i1.ɵeld(98, 0, null, null, 2, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵeld(99, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["[DeepNLP]1&2. Introduction & word vector"])), (_l()(), i1.ɵeld(101, 0, null, null, 0, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(102, 0, null, null, 10, "ul", [["class", "post-shares"]], null, null, null, null, null)), (_l()(), i1.ɵeld(103, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(104, 0, null, null, 3, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵeld(105, 0, null, null, 0, "i", [["class", "rounded-x icon-speech"]], null, null, null, null, null)), (_l()(), i1.ɵeld(106, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["5"])), (_l()(), i1.ɵeld(108, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(109, 0, null, null, 3, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵeld(110, 0, null, null, 0, "i", [["class", "rounded-x icon-eye"]], null, null, null, null, null)), (_l()(), i1.ɵeld(111, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["5"])), (_l()(), i1.ɵeld(113, 0, null, null, 2, "div", [["class", "col-sm-5 sm-margin-bottom-20"]], null, null, null, null, null)), (_l()(), i1.ɵeld(114, 0, null, null, 1, "div", [["class", "responsive-video"]], null, null, null, null, null)), (_l()(), i1.ɵeld(115, 0, null, null, 0, "iframe", [["allowfullscreen", ""], ["frameborder", "0"], ["mozallowfullscreen", ""], ["src", "https://www.youtube.com/embed/f9k5fxouO1Q"], ["webkitallowfullscreen", ""]], null, null, null, null, null)), (_l()(), i1.ɵeld(116, 0, null, null, 1, "div", [["class", "clearfix margin-bottom-20"]], null, null, null, null, null)), (_l()(), i1.ɵeld(117, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), i1.ɵeld(118, 0, null, null, 8, "ul", [["class", "pager pager-v3 pager-sm no-margin-bottom"]], null, null, null, null, null)), (_l()(), i1.ɵeld(119, 0, null, null, 2, "li", [["class", "previous"]], null, null, null, null, null)), (_l()(), i1.ɵeld(120, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u2190 Older"])), (_l()(), i1.ɵeld(122, 0, null, null, 1, "li", [["class", "page-amount"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["1 of 7"])), (_l()(), i1.ɵeld(124, 0, null, null, 2, "li", [["class", "next"]], null, null, null, null, null)), (_l()(), i1.ɵeld(125, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Newer \u2192"])), (_l()(), i1.ɵeld(127, 0, null, null, 46, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(128, 0, null, null, 2, "div", [["class", "headline-v2 bg-color-light"]], null, null, null, null, null)), (_l()(), i1.ɵeld(129, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Latest Posts"])), (_l()(), i1.ɵeld(131, 0, null, null, 16, "ul", [["class", "list-unstyled blog-latest-posts margin-bottom-50"]], null, null, null, null, null)), (_l()(), i1.ɵeld(132, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(133, 0, null, null, 2, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵeld(134, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["2018 \uB300\uD55C\uC0B0\uC5C5\uACF5\uD559\uD68C \uCD98\uACC4\uD559\uC220\uB300\uD68C"])), (_l()(), i1.ɵeld(136, 0, null, null, 3, "small", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["2018. 04. 16. / "])), (_l()(), i1.ɵeld(138, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["News"])), (_l()(), i1.ɵeld(140, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(141, 0, null, null, 2, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵeld(142, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["[DeepNLP]1&2. Introduction & word vector"])), (_l()(), i1.ɵeld(144, 0, null, null, 3, "small", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["2017. 7. 22. / "])), (_l()(), i1.ɵeld(146, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Youtube"])), (_l()(), i1.ɵeld(148, 0, null, null, 2, "div", [["class", "headline-v2 bg-color-light"]], null, null, null, null, null)), (_l()(), i1.ɵeld(149, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Categories"])), (_l()(), i1.ɵeld(151, 0, null, null, 15, "ul", [["class", "list-inline tags-v2 margin-bottom-50"]], null, null, null, null, null)), (_l()(), i1.ɵeld(152, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(153, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["News"])), (_l()(), i1.ɵeld(155, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(156, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Photos"])), (_l()(), i1.ɵeld(158, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(159, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Seminar"])), (_l()(), i1.ɵeld(161, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(162, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Youtube"])), (_l()(), i1.ɵeld(164, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(165, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Archive"])), (_l()(), i1.ɵeld(167, 0, null, null, 2, "div", [["class", "headline-v2 bg-color-light"]], null, null, null, null, null)), (_l()(), i1.ɵeld(168, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Photostream"])), (_l()(), i1.ɵeld(170, 0, null, null, 3, "ul", [["class", "list-inline blog-photostream margin-bottom-50"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 2, null, View_NewsComponent_1)), i1.ɵdid(172, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i1.ɵpad(173, 9)], function (_ck, _v) { var currVal_0 = _ck(_v, 173, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9); _ck(_v, 172, 0, currVal_0); }, null); }
exports.View_NewsComponent_0 = View_NewsComponent_0;
function View_NewsComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-news", [], null, null, null, View_NewsComponent_0, RenderType_NewsComponent)), i1.ɵdid(1, 114688, null, 0, i3.NewsComponent, [i4.UtilsService, i5.DisplayService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_NewsComponent_Host_0 = View_NewsComponent_Host_0;
var NewsComponentNgFactory = i1.ɵccf("app-news", i3.NewsComponent, View_NewsComponent_Host_0, {}, {}, []);
exports.NewsComponentNgFactory = NewsComponentNgFactory;


/***/ }),

/***/ "./src/app/news/news.component.scss.shim.ngstyle.js":
/*!**********************************************************!*\
  !*** ./src/app/news/news.component.scss.shim.ngstyle.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["[data-board-toggle][_ngcontent-%COMP%] {\n  display: none; }\n  [data-board-toggle].on[_ngcontent-%COMP%] {\n    display: block; }\n  #dsba-back-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 5px;\n  border: 2px solid #395182;\n  margin-bottom: 10px; }\n  #dsba-back-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    position: absolute;\n    font-size: 30px;\n    top: -6px;\n    left: 20px;\n    color: #395182; }\n  .news-v3[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #482525;\n  font-weight: 500; }\n  .news-v3[_ngcontent-%COMP%]   .post-shares[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: #395182;\n  min-width: 22px;\n  width: inherit; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var utils_service_1 = __webpack_require__(/*! ../_services/utils.service */ "./src/app/_services/utils.service.ts");
var display_service_1 = __webpack_require__(/*! ../_services/display.service */ "./src/app/_services/display.service.ts");
var NewsComponent = /** @class */ (function () {
    function NewsComponent(utilsService, displayService) {
        this.utilsService = utilsService;
        this.displayService = displayService;
    }
    NewsComponent.prototype.ngOnInit = function () {
        this.displayService.set_board_display();
    };
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;


/***/ }),

/***/ "./src/app/projects/projects.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/projects/projects.component.ngfactory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./projects.component.scss.shim.ngstyle */ "./src/app/projects/projects.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ./projects.component */ "./src/app/projects/projects.component.ts");
var i4 = __webpack_require__(/*! ../_services/utils.service */ "./src/app/_services/utils.service.ts");
var i5 = __webpack_require__(/*! ../_services/display.service */ "./src/app/_services/display.service.ts");
var styles_ProjectsComponent = [i0.styles];
var RenderType_ProjectsComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ProjectsComponent, data: {} });
exports.RenderType_ProjectsComponent = RenderType_ProjectsComponent;
function View_ProjectsComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "a", [], [[1, "data-section", 0]], null, null, null, null)), (_l()(), i1.ɵted(3, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.index; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.title; _ck(_v, 3, 0, currVal_1); }); }
function View_ProjectsComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.title; _ck(_v, 1, 0, currVal_0); }); }
function View_ProjectsComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "li", [["class", "dsba-li"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "i", [["class", "fa fa-check"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(3, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 3, 0, currVal_0); }); }
function View_ProjectsComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "ul", [["class", "list-unstyled lists-v2 margin-bottom-30"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProjectsComponent_4)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProjectsComponent_5)), i1.ɵdid(4, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.contents; _ck(_v, 4, 0, currVal_1); }, null); }
function View_ProjectsComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "div", [["class", "col-md-12 md-margin-bottom-50"]], [[1, "data-section", 0]], null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "img", [["alt", ""], ["class", "img-responsive"]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 5, "div", [["class", "col-md-9"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 2, "div", [["class", "headline-left margin-bottom-30"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "h3", [["class", "headline-brd"]], null, null, null, null, null)), (_l()(), i1.ɵted(6, null, ["", ""])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProjectsComponent_3)), i1.ɵdid(8, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_3 = _v.context.$implicit.contents; _ck(_v, 8, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.i; _ck(_v, 1, 0, currVal_0); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.img, ""); _ck(_v, 2, 0, currVal_1); var currVal_2 = _v.context.$implicit.title; _ck(_v, 6, 0, currVal_2); }); }
function View_ProjectsComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 10, "div", [["class", "container content-sm"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "div", [["class", "headline-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["PROJECTS"])), (_l()(), i1.ɵeld(4, 0, null, null, 6, "div", [["class", "content-xs"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 5, "div", [["class", "cbp-l-filters-text content-xs"], ["id", "filters-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 4, "div", [["class", "cbp-filter-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\uBCF8 \uC5F0\uAD6C\uC2E4\uC5D0\uC11C\uB294 \uB370\uC774\uD130\uACFC\uD559 \uBC0F \uBE44\uC988\uB2C8\uC2A4 \uC560\uB110\uB9AC\uD2F1\uC2A4 \uC5F0\uAD6C \uBD84\uC57C\uC5D0 \uC0B0\uC5C5\uACF5\uD559\uC758 \uB2E4\uC591\uD55C \uBC30\uACBD \uC9C0\uC2DD\uC744 \uC811\uBAA9\uD558\uC5EC \uB2E4\uC591\uD55C \uC0B0\uD559\uC5F0 \uACF5\uB3D9\uC5F0\uAD6C\uB97C \uC218\uD589\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uACFC\uAC70 \uAE08\uC744 \uB9CC\uB4E4\uACE0\uC790 \uD588\uB358 \uC5F0\uAE08\uC220\uC0AC\uB4E4\uC758 \uB178\uB825\uC774 \uACFC\uD559\uC758 \uBC1C\uC804\uC744 \uC774\uB04C\uC5C8\uB4EF\uC774 DSBA \uC5F0\uAD6C\uC2E4\uC5D0\uC11C\uB294 \uC804\uBB38\uC131\uC744 \uAC16\uCD98 \uC11D/\uBC15\uC0AC \uC591\uC131 \uBC0F \uB2E4\uC591\uD55C \uBD84\uC57C \uC804\uBB38\uAC00 \uAD50\uC721\uC744 \uD1B5\uD574 \uBAA8\uB450\uAC00 \uAC00\uCE58 \uC788\uB294 \uC0B6\uC744 \uC0B4 \uC218 \uC788\uB294 \uC0AC\uD68C\uB97C \uB9CC\uB4DC\uB294\uB370 \uAE30\uC5EC\uD558\uACE0\uC790 \uD569\uB2C8\uB2E4."])), (_l()(), i1.ɵeld(11, 0, null, null, 14, "div", [["class", "container content-sm"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 13, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 9, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 8, "div", [["class", "col-md-12 fixed"], ["data-nav", ""], ["id", "dsba-right-nav"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 4, "div", [["class", "headline-v2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 3, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Korea University"])), (_l()(), i1.ɵeld(18, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["(\uC5F0\uAD6C\uCC45\uC784\uC790)"])), (_l()(), i1.ɵeld(20, 0, null, null, 2, "ul", [["class", "list-unstyled blog-trending margin-bottom-50"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProjectsComponent_1)), i1.ɵdid(22, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(23, 0, null, null, 2, "div", [["class", "col-md-9"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProjectsComponent_2)), i1.ɵdid(25, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(26, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(28, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(31, 0, null, null, 0, "br", [], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.projects; _ck(_v, 22, 0, currVal_0); var currVal_1 = _co.projects; _ck(_v, 25, 0, currVal_1); }, null); }
exports.View_ProjectsComponent_0 = View_ProjectsComponent_0;
function View_ProjectsComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-projects", [], null, null, null, View_ProjectsComponent_0, RenderType_ProjectsComponent)), i1.ɵdid(1, 114688, null, 0, i3.ProjectsComponent, [i4.UtilsService, i5.DisplayService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ProjectsComponent_Host_0 = View_ProjectsComponent_Host_0;
var ProjectsComponentNgFactory = i1.ɵccf("app-projects", i3.ProjectsComponent, View_ProjectsComponent_Host_0, {}, {}, []);
exports.ProjectsComponentNgFactory = ProjectsComponentNgFactory;


/***/ }),

/***/ "./src/app/projects/projects.component.scss.shim.ngstyle.js":
/*!******************************************************************!*\
  !*** ./src/app/projects/projects.component.scss.shim.ngstyle.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".dsba-li[_ngcontent-%COMP%] {\n  display: flex; }\n  .dsba-li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .dsba-li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline-block; }\n  .container.content-sm[_ngcontent-%COMP%] {\n  padding-top: 60px;\n  padding-bottom: 10px; }\n  img[_ngcontent-%COMP%] {\n  margin-bottom: 10px; }\n  @media (min-width: 992px) {\n  #dsba-right-nav[_ngcontent-%COMP%] {\n    position: fixed;\n    max-width: 250px;\n    width: calc(25% - 100px); } }\n  @media (max-width: 991px) {\n  #dsba-right-nav[_ngcontent-%COMP%] {\n    display: none; } }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var utils_service_1 = __webpack_require__(/*! ../_services/utils.service */ "./src/app/_services/utils.service.ts");
var display_service_1 = __webpack_require__(/*! ../_services/display.service */ "./src/app/_services/display.service.ts");
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(utilsService, displayService) {
        this.utilsService = utilsService;
        this.displayService = displayService;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.displayService.set_researches_display();
        this.projects = this.utilsService.get_projects();
    };
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;


/***/ }),

/***/ "./src/app/publications/publications.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/publications/publications.component.ngfactory.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./publications.component.scss.shim.ngstyle */ "./src/app/publications/publications.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./publications.component */ "./src/app/publications/publications.component.ts");
var i5 = __webpack_require__(/*! ../_services/display.service */ "./src/app/_services/display.service.ts");
var i6 = __webpack_require__(/*! ../_services/utils.service */ "./src/app/_services/utils.service.ts");
var styles_PublicationsComponent = [i0.styles];
var RenderType_PublicationsComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_PublicationsComponent, data: {} });
exports.RenderType_PublicationsComponent = RenderType_PublicationsComponent;
function View_PublicationsComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "span", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(3, 0, null, null, 1, "div", [["class", "cbp-filter-item"]], [[1, "data-type0", 0]], null, null, null, null)), (_l()(), i1.ɵted(4, null, [" ", " "])), (_l()(), i1.ɵted(-1, null, [" | "]))], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/publications/", _v.context.$implicit.type, ""); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _v.context.$implicit.type; _ck(_v, 3, 0, currVal_3); var currVal_4 = _v.context.$implicit.title; _ck(_v, 4, 0, currVal_4); }); }
function View_PublicationsComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "div", [["class", "panel-collapse collapse"]], [[8, "id", 0]], null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "div", [["class", "panel-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "a", [["target", "black_"]], [[8, "href", 4]], null, null, null, null)), (_l()(), i1.ɵted(3, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "collapse-", _v.parent.context.index, ""); _ck(_v, 0, 0, currVal_0); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.parent.context.$implicit.url, ""); _ck(_v, 2, 0, currVal_1); var currVal_2 = _v.parent.context.$implicit.url; _ck(_v, 3, 0, currVal_2); }); }
function View_PublicationsComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 9, "div", [["class", "panel panel-default"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 6, "div", [["class", "panel-heading"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 5, "h4", [["class", "panel-title"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 4, "a", [["class", "accordion-toggle"], ["data-parent", "#accordion-v1"], ["data-toggle", "collapse"]], [[8, "href", 4]], null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(5, null, ["", "."])), (_l()(), i1.ɵeld(6, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(7, null, ["", ""])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PublicationsComponent_4)), i1.ɵdid(9, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_3 = _v.context.$implicit.url; _ck(_v, 9, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "#collapse-", _v.context.index, ""); _ck(_v, 3, 0, currVal_0); var currVal_1 = (_v.context.index + 1); _ck(_v, 5, 0, currVal_1); var currVal_2 = _v.context.$implicit.content; _ck(_v, 7, 0, currVal_2); }); }
function View_PublicationsComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 7, "div", [["class", "row dsba-publications"]], [[1, "data-type0", 0]], null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 6, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 5, "div", [["class", "tab-v1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 4, "div", [["class", "tab-content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 3, "div", [["class", "tab-pane fade in active"], ["id", "home"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 2, "div", [["class", "panel-group acc-v1"], ["id", "accordion-v1"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PublicationsComponent_3)), i1.ɵdid(7, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_1 = _v.context.$implicit.contents; _ck(_v, 7, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.type; _ck(_v, 0, 0, currVal_0); }); }
function View_PublicationsComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "div", [["class", "container content-sm"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "div", [["class", "headline-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["PUBLICATIONS"])), (_l()(), i1.ɵeld(4, 0, null, null, 7, "div", [["class", "cube-portfolio container margin-bottom-60"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 4, "div", [["class", "content-xs"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 3, "div", [["class", "cbp-l-filters-text content-xs"], ["id", "filters-container"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" | "])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PublicationsComponent_1)), i1.ɵdid(9, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PublicationsComponent_2)), i1.ɵdid(11, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pubs; _ck(_v, 9, 0, currVal_0); var currVal_1 = _co.pubs; _ck(_v, 11, 0, currVal_1); }, null); }
exports.View_PublicationsComponent_0 = View_PublicationsComponent_0;
function View_PublicationsComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-publications", [], null, null, null, View_PublicationsComponent_0, RenderType_PublicationsComponent)), i1.ɵdid(1, 114688, null, 0, i4.PublicationsComponent, [i5.DisplayService, i6.UtilsService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_PublicationsComponent_Host_0 = View_PublicationsComponent_Host_0;
var PublicationsComponentNgFactory = i1.ɵccf("app-publications", i4.PublicationsComponent, View_PublicationsComponent_Host_0, {}, {}, []);
exports.PublicationsComponentNgFactory = PublicationsComponentNgFactory;


/***/ }),

/***/ "./src/app/publications/publications.component.scss.shim.ngstyle.js":
/*!**************************************************************************!*\
  !*** ./src/app/publications/publications.component.scss.shim.ngstyle.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["#accordion-v1[_ngcontent-%COMP%]   .accordion-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: white; }\n  #accordion-v1[_ngcontent-%COMP%]   .accordion-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-right: 10px;\n    word-wrap: break-word; }\n  #accordion-v1[_ngcontent-%COMP%]   .accordion-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n      font-weight: 900;\n      color: #395182; }\n  #accordion-v1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  word-wrap: break-word; }\n  .cube-portfolio[_ngcontent-%COMP%]   .cbp-l-filters-text[_ngcontent-%COMP%]   .cbp-filter-item[_ngcontent-%COMP%]:hover, .cube-portfolio[_ngcontent-%COMP%]   .cbp-l-filters-text[_ngcontent-%COMP%]   .cbp-filter-item.in[_ngcontent-%COMP%] {\n  color: #395182;\n  font-weight: 900; }\n  .dsba-publications[_ngcontent-%COMP%] {\n  display: none; }\n  .dsba-publications.in[_ngcontent-%COMP%] {\n    display: block; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/publications/publications.component.ts":
/*!********************************************************!*\
  !*** ./src/app/publications/publications.component.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var display_service_1 = __webpack_require__(/*! ../_services/display.service */ "./src/app/_services/display.service.ts");
var utils_service_1 = __webpack_require__(/*! ../_services/utils.service */ "./src/app/_services/utils.service.ts");
var PublicationsComponent = /** @class */ (function () {
    function PublicationsComponent(displayService, utilsService) {
        this.displayService = displayService;
        this.utilsService = utilsService;
    }
    PublicationsComponent.prototype.ngOnInit = function () {
        this.displayService.set_publications_display();
        this.pubs = this.utilsService.get_publications();
    };
    return PublicationsComponent;
}());
exports.PublicationsComponent = PublicationsComponent;


/***/ }),

/***/ "./src/app/researches/researches.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/researches/researches.component.ngfactory.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./researches.component.scss.shim.ngstyle */ "./src/app/researches/researches.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ./researches.component */ "./src/app/researches/researches.component.ts");
var i4 = __webpack_require__(/*! ../_services/utils.service */ "./src/app/_services/utils.service.ts");
var i5 = __webpack_require__(/*! ../_services/display.service */ "./src/app/_services/display.service.ts");
var styles_ResearchesComponent = [i0.styles];
var RenderType_ResearchesComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ResearchesComponent, data: {} });
exports.RenderType_ResearchesComponent = RenderType_ResearchesComponent;
function View_ResearchesComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "a", [], [[1, "data-section", 0]], null, null, null, null)), (_l()(), i1.ɵted(3, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.index; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.title; _ck(_v, 3, 0, currVal_1); }); }
function View_ResearchesComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.title; _ck(_v, 1, 0, currVal_0); }); }
function View_ResearchesComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "li", [["class", "dsba-li"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "i", [["class", "fa fa-check"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(3, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 3, 0, currVal_0); }); }
function View_ResearchesComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "ul", [["class", "list-unstyled lists-v2 margin-bottom-30"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ResearchesComponent_4)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ResearchesComponent_5)), i1.ɵdid(4, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.contents; _ck(_v, 4, 0, currVal_1); }, null); }
function View_ResearchesComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "div", [["class", "col-md-12 md-margin-bottom-50"]], [[1, "data-section", 0]], null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "img", [["alt", ""], ["class", "img-responsive"]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 5, "div", [["class", "col-md-9"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 2, "div", [["class", "headline-left margin-bottom-30"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "h3", [["class", "headline-brd"]], null, null, null, null, null)), (_l()(), i1.ɵted(6, null, ["", ""])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ResearchesComponent_3)), i1.ɵdid(8, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_3 = _v.context.$implicit.contents; _ck(_v, 8, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _v.context.index; _ck(_v, 1, 0, currVal_0); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.img, ""); _ck(_v, 2, 0, currVal_1); var currVal_2 = _v.context.$implicit.title; _ck(_v, 6, 0, currVal_2); }); }
function View_ResearchesComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 10, "div", [["class", "container content-sm"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "div", [["class", "headline-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["RESEARCHES"])), (_l()(), i1.ɵeld(4, 0, null, null, 6, "div", [["class", "content-xs"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 5, "div", [["class", "cbp-l-filters-text content-xs"], ["id", "filters-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 4, "div", [["class", "cbp-filter-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\uC6B0\uB9AC\uB294 \uD604\uC7AC \uBE45\uB370\uC774\uD130(Big Data)\uC640 \uC0AC\uBB3C\uC778\uD130\uB137(Internet of Things; IoT)\uC73C\uB85C \uB300\uBCC0\uB418\uB294 \uB370\uC774\uD130 \uD64D\uC218\uC758 \uC2DC\uB300\uC5D0 \uC0B4\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC138\uACC4\uB294 \uC0AC\uB78C\uBFD0\uB9CC \uC544\uB2C8\uB77C \uBAA8\uB4E0 \uC0AC\uBB3C\uB4E4\uC774 \uC2DC\uAC04\uACFC \uC7A5\uC18C\uC5D0 \uAD6C\uC560 \uBC1B\uC9C0 \uC54A\uACE0 \uB124\uD2B8\uC6CC\uD06C\uB85C \uC5F0\uACB0\uB418\uB294 \uC0AC\uD68C\uC785\uB2C8\uB2E4. \uBCF8 \uC5F0\uAD6C\uC2E4\uC5D0\uC11C\uB294 \uC774\uC640 \uAC19\uC740 \uCD08\uC5F0\uACB0 \uC0AC\uD68C\uC5D0\uC11C \uC0B0\uC5C5 \uBC0F \uACF5\uACF5 \uBD84\uC57C\uC758 \uC815\uB7C9\uC801 \uB370\uC774\uD130 \uAE30\uBC18 \uC758\uC0AC\uACB0\uC815\uC744 \uC9C0\uC6D0\uD558\uAE30 \uC704\uD55C \uB2E4\uC591\uD55C \uBC29\uBC95\uB860\uC744 \uAC1C\uBC1C\uD558\uACE0 \uC774\uB97C \uC751\uC6A9\uD558\uB294 \uC5F0\uAD6C\uB97C \uC218\uD589\uD569\uB2C8\uB2E4."])), (_l()(), i1.ɵeld(11, 0, null, null, 12, "div", [["class", "container content-sm"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 11, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 7, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 6, "div", [["class", "col-md-12 fixed"], ["data-nav", ""], ["id", "dsba-right-nav"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 2, "div", [["class", "headline-v2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Researches"])), (_l()(), i1.ɵeld(18, 0, null, null, 2, "ul", [["class", "list-unstyled blog-trending margin-bottom-50"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ResearchesComponent_1)), i1.ɵdid(20, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(21, 0, null, null, 2, "div", [["class", "col-md-9"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ResearchesComponent_2)), i1.ɵdid(23, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(24, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(28, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 0, "br", [], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.researches; _ck(_v, 20, 0, currVal_0); var currVal_1 = _co.researches; _ck(_v, 23, 0, currVal_1); }, null); }
exports.View_ResearchesComponent_0 = View_ResearchesComponent_0;
function View_ResearchesComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-researches", [], null, null, null, View_ResearchesComponent_0, RenderType_ResearchesComponent)), i1.ɵdid(1, 114688, null, 0, i3.ResearchesComponent, [i4.UtilsService, i5.DisplayService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ResearchesComponent_Host_0 = View_ResearchesComponent_Host_0;
var ResearchesComponentNgFactory = i1.ɵccf("app-researches", i3.ResearchesComponent, View_ResearchesComponent_Host_0, {}, {}, []);
exports.ResearchesComponentNgFactory = ResearchesComponentNgFactory;


/***/ }),

/***/ "./src/app/researches/researches.component.scss.shim.ngstyle.js":
/*!**********************************************************************!*\
  !*** ./src/app/researches/researches.component.scss.shim.ngstyle.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".dsba-li[_ngcontent-%COMP%] {\n  display: flex; }\n  .dsba-li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .dsba-li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline-block; }\n  .container.content-sm[_ngcontent-%COMP%] {\n  padding-top: 60px;\n  padding-bottom: 10px; }\n  img[_ngcontent-%COMP%] {\n  margin-bottom: 10px; }\n  @media (min-width: 992px) {\n  #dsba-right-nav[_ngcontent-%COMP%] {\n    position: fixed;\n    max-width: 250px;\n    width: calc(25% - 100px); } }\n  @media (max-width: 991px) {\n  #dsba-right-nav[_ngcontent-%COMP%] {\n    display: none; } }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/researches/researches.component.ts":
/*!****************************************************!*\
  !*** ./src/app/researches/researches.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var utils_service_1 = __webpack_require__(/*! ../_services/utils.service */ "./src/app/_services/utils.service.ts");
var display_service_1 = __webpack_require__(/*! ../_services/display.service */ "./src/app/_services/display.service.ts");
var ResearchesComponent = /** @class */ (function () {
    function ResearchesComponent(utilsService, displayService) {
        this.utilsService = utilsService;
        this.displayService = displayService;
    }
    ResearchesComponent.prototype.ngOnInit = function () {
        this.displayService.set_researches_display();
        this.researches = this.utilsService.get_researches();
    };
    return ResearchesComponent;
}());
exports.ResearchesComponent = ResearchesComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_server_module_ngfactory_1 = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
exports.AppServerModuleNgFactory = app_server_module_ngfactory_1.AppServerModuleNgFactory;
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
var app_server_module_1 = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
exports.AppServerModule = app_server_module_1.AppServerModule;
exports.LAZY_MODULE_MAP = {};


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/seohasong/SEOHASONG/gitfree/DSBA/DSBA.client/src/main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/http":
/*!********************************!*\
  !*** external "@angular/http" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@nguniversal/module-map-ngfactory-loader":
/*!***********************************************************!*\
  !*** external "@nguniversal/module-map-ngfactory-loader" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader");

/***/ })

/******/ })));