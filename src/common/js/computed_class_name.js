/**
 * Created by lenovo on 2017/11/6.
 */
import {
    url
} from './urlLocation';
export const class_name_ftn = {
    projects_classNames(data) {
        if (data == '1' || data == '2' || data == '优+' || data == '优') {
            return 'projectsGreener'
        } else if (data == '3' || data == '良') {
            return 'projectsBluer'
        } else if (data == '4' || data == '普') {
            return 'projectsPu'
        }
        if (data == '5' || data == '差') {
            return 'projectsRed'
        } else {
            return 'defaults'
        }
    },
    classLv(i) {
        if (i == 'A+' || i == 'S+' || i == 'S') {
            return 'greener'
        } else if (i == 'A') {
            return 'bluer'
        } else if (i == 'B' || i == 'C') {
            return 'pu'
        } else if (i == 'D' || i == 'E') {
            return 'reder'
        } else {
            return 'greyer'
        }
    },
    storeNam(data) {
        if (data == '1') {
            return '优+'
        } else if (data == '2') {
            return '优'
        } else if (data == '3') {
            return '良'
        } else if (data == '4') {
            return '普'
        } else if (data == '5') {
            return '差'
        } else if (data == '6' || data == '纯涂料') {
            return '涂'
        } else if (data == '7') {
            return '石'
        } else if (data == '8') {
            return '有'
        } else {
            return '无'
        }
    },
    classNames(data) {
        if (data == '1' || data == '2' || data == '优+' || data == '优') {
            return 'green'
        } else if (data == '3' || data == '良') {
            return 'blue'
        } else if (data == '4' || data == '普') {
            return 'pu'
        }
        if (data == '5' || data == '差') {
            return 'red'
        } else {
            return 'defaults'
        }
    },
    gbJudge(data) {
        if (data == '1') {
            return '符合规划设计'
        } else if (data == '2') {
            return '不符合规划设计'
        } else if (data == '3') {
            return '整改中'
        } else if (data == '4') {
            return '已整改'
        } else {
            return '未检验'
        }
    },

    judgeClass(data) {
        if (data == '1') {
            return 'judgeSuccess'
        } else if (data == '2' || data == '3') {
            return 'judgeError'
        } else {
            return 'judgeDefault'
        }
    },
    gbClass(data) {
        if (data == '1') {
            return 'gbDefulat'
        } else if (data == '0') {
            return 'gbError'
        }
    },
    gbTitle(data) {
        if (data == '1') {
            return '符合国家标准'
        } else if (data == '0') {
            return '不符合国家标准'
        }
    },
    // gb_img(data){
    //   switch (data) {
    //     case '1':
    //       return 'http://app1.homehawkeye.com/icon_zyrk@2x.png';
    //       break;
    //     case '2':
    //       return 'http://app1.homehawkeye.com/icon_cyrk@2x.png';
    //       break;
    //     case '3':
    //       return 'http://app1.homehawkeye.com/icon_ethd@2x.png';
    //       break;
    //     case '4':
    //       return 'http://app1.homehawkeye.com/icon_lrhd@2x.png';
    //       break;
    //     case '5':
    //       return 'http://app1.homehawkeye.com/icon_yd@2x.png';
    //       break;
    //     case '6':
    //       return 'http://app1.homehawkeye.com/icon_cw@2x.png';
    //       break;
    //     case '7':
    //       return 'http://app1.homehawkeye.com/icon_jl@2x.png';
    //       break;
    //     case '8':
    //       return 'http://app1.homehawkeye.com/icon_xxgc@2x.png';
    //       break;
    //     case '9':
    //       return 'http://app1.homehawkeye.com/icon_zxjg@2x.png';
    //       break;
    //     case 'a':
    //       return 'http://app1.homehawkeye.com/icon_xxgc@2x.png';
    //       break;
    //     case 'b':
    //       return 'http://app1.homehawkeye.com/icon_cd@2x.png';
    //       break;
    //     default:
    //       return 'http://app1.homehawkeye.com/icon_qt@2x.png';
    //   }
    // },
    tenement_class(data) {
        switch (data) {
            case '1':
                return 'qualityOneIndex';
                break;
            case '2':
                return 'qualityOneIndexTwo';
                break;
            case '3':
                return 'qualityOneIndexThree';
                break;
            case '4':
                return 'qualityOneIndexFour';
                break;
            case '5':
                return 'qualityOneIndexFive';
                break;
            case '6':
                return 'qualityOneIndex';
                break;
            default:
                return 'qualityOneIndex';
        }
    },
    tenement_img(data) {
        switch (data) {
            case '1':
                return 'http://app1.homehawkeye.com/one.svg';
                break;
            case '2':
                return 'http://app1.homehawkeye.com/two.svg';
                break;
            case '3':
                return 'http://app1.homehawkeye.com/three.svg';
                break;
            case '4':
                return 'http://app1.homehawkeye.com/four.svg';
                break;
            case '5':
                return 'http://app1.homehawkeye.com/five.svg';
                break;
            case '6':
                return 'http://app1.homehawkeye.com/icon_6@2x.png';
                break;
            default:
                return 'http://app1.homehawkeye.com/icon_6@2x.png';
        }
    },
    landscape(data) {
        if (data == '1') {
            return '优'
        } else if (data == '2') {
            return '良'
        } else if (data == '3') {
            return '普'
        } else {
            return '暂无数据'
        }
    },
    obShare_jb(data) {
        switch (data) {
            case '工程质量':
                return 'http://app1.homehawkeye.com/pic_gongchengzhiliang@3x.png?imageslim'
                break;
            case '规划设计':
                return 'http://app1.homehawkeye.com/pic_guihuasheji@3x.png?imageslim'
                break;
            case '规划落实':
                return 'http://app1.homehawkeye.com/pic_guihualuoshi@3x.png?imageslim'
                break;
            case '景观评测':
                return 'http://app1.homehawkeye.com/pic_jingguanceping@3x.png?imageslim'
                break;
            case '物业评测':
                return 'http://app1.homehawkeye.com/pic_wuyeceping@3x.png?imageslim'
                break;
            case '周边配套':
                return 'http://app1.homehawkeye.com/pic_zhoubianpeitao@3x.png?imageslim'
                break;
        }
    }
};