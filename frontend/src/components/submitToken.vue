<template>
  <div id="submitWrap">
    <header-con></header-con>
    <!-- Submit Tab -->
    <div class="subTab inner sm2">
      <a href="javascript:void(0)" @click="href('/submit/token')" class="on">
        Submit Token
      </a>
      <a href="javascript:void(0)" @click="href('/submit/dapp')">
        Submit DApp
      </a>
    </div>
    <div class="subTit txt_center" style="margin-top:40px;">
      <div class="inner sm2">
        <h1 class="title_l">{{lang.submit_token_title}}</h1>
        <p class="title_desc mgTop10">{{lang.submit_token_title_desc}}</p>
      </div>
    </div>
    <div class="formWrap">
      <div class="in">
        <div class="desc">
          <ul>
            <li>
              {{lang.submit_token_desc_01}}
            </li>
            <li>
              {{lang.submit_token_desc_02}}
              <p>{{lang.submit_token_desc_03}}</p>
            </li>
          </ul>
          <p class="mandatory">{{lang.mandatory_information}}</p>
        </div>
        <v-form class="form" ref="form" v-model="valid">
          <div class="info">
            <!-- [rules.required, rules.email] -->
            <!-- [rules.required] -->
            <!-- 프로젝트 팀 정보 -->
            <div>
              <h2 class="title_sub s24">{{lang.submit_form_tit_01}}</h2>
              <div class="inputWrap halfWrap">
                <div class="half">
                  <v-flex>
                    <v-text-field
                      v-model="team[0]"
                      :label="lang.submit_token_label_01"
                      :rules="[rules.required]"
                      box
                    ></v-text-field>
                  </v-flex>
                </div>
                <div class="half">
                  <v-flex>
                    <v-text-field
                      v-model="team[1]"
                      :label="lang.submit_form_label_04"
                      :rules="[rules.required, rules.url]"
                      box
                    ></v-text-field>
                  </v-flex>
                </div>
              </div>
              <div class="inputWrap halfWrap">
                <div class="half">
                  <v-flex>
                    <v-text-field
                      v-model="team[2]"
                      :label="lang.submit_form_label_01"
                      :rules="[rules.required]"
                      box
                    ></v-text-field>
                  </v-flex>
                </div>
                <div class="half">
                  <v-flex>
                    <v-text-field
                      v-model="team[3]"
                      :label="lang.submit_form_label_02"
                      :rules="[rules.required]"
                      box
                    ></v-text-field>
                  </v-flex>
                </div>
              </div>
              <div class="inputWrap textarea">
                <v-flex>
                  <v-textarea
                    rows="3"
                    v-model="team[4]"
                    :rules="[rules.required]"
                    box
                  >
                    <template v-slot:label>
                      <div>
                        {{lang.submit_token_label_02}}
                      </div>
                    </template>
                  </v-textarea>
                </v-flex>
              </div>
            </div>
            <!-- 토큰 정보 -->
            <div>
              <h2 class="title_sub s24">{{lang.token_form_title_01}}</h2>
              <div class="inputWrap halfWrap">
                <div class="half">
                  <v-flex>
                    <v-select
                      v-model="token[0]"
                      :items="chainCategory"
                      :label="lang.submit_token_label_03"
                      :rules="[rules.required]"
                      box
                    ></v-select>
                  </v-flex>
                </div>
                <div class="half">
                  <v-flex>
                    <v-text-field
                      v-model="token[1]"
                      :label="lang.submit_token_label_04"
                      :rules="[rules.required]"
                      box
                    ></v-text-field>
                  </v-flex>
                </div>
              </div>
              <div class="inputWrap halfWrap">
                <div class="half">
                  <v-flex>
                    <v-text-field
                      v-model="token[2]"
                      :label="lang.submit_token_label_05"
                      :rules="[rules.required, rules.symbol]"
                      @input="toUppercase"
                      box
                    ></v-text-field>
                  </v-flex>
                </div>
                <div class="half">
                  <v-flex>
                    <v-text-field
                      v-model="token[3]"
                      :label="lang.submit_token_label_06"
                      :rules="[rules.required]"
                      box
                    ></v-text-field>
                  </v-flex>
                </div>
              </div>
              <div class="inputWrap halfWrap">
                <div class="half">
                  <v-flex>
                    <v-text-field
                      v-model="token[4]"
                      :label="lang.submit_token_label_07"
                      box
                    ></v-text-field>
                  </v-flex>
                </div>
              </div>
            </div>
            <!-- 연락처 -->
            <div>
              <h2 class="title_sub s24">{{lang.submit_form_tit_03}}</h2>
              <div class="inputWrap halfWrap">
                <div class="half">
                  <v-flex>
                    <v-text-field
                      v-model="contract"
                      :label="lang.submit_form_label_10"
                      :rules="[rules.required, rules.email]"
                      box
                    ></v-text-field>
                  </v-flex>
                </div>
              </div>
            </div>
            <!-- SNS (URL) -->
            <div>
              <h2 class="title_sub s24">{{lang.submit_form_tit_04}}</h2>
              <div class="inputWrap halfWrap">
                <div class="half">
                  <v-flex>
                    <v-text-field
                      v-model="sns[0]"
                      :label="lang.submit_form_label_11"
                      box
                    ></v-text-field>
                  </v-flex>
                </div>
                <div class="half">
                  <v-flex>
                    <v-text-field
                      v-model="sns[1]"
                      :label="lang.submit_form_label_12"
                      box
                    ></v-text-field>
                  </v-flex>
                </div>
                <div class="half">
                  <v-flex>
                    <v-text-field
                      v-model="sns[2]"
                      :label="lang.submit_form_label_13"
                      box
                    ></v-text-field>
                  </v-flex>
                </div>
                <div class="half">
                  <v-flex>
                    <v-text-field
                      v-model="sns[3]"
                      :label="lang.submit_form_label_14"
                      box
                    ></v-text-field>
                  </v-flex>
                </div>
                <div class="half">
                  <v-flex>
                    <v-text-field
                      v-model="sns[4]"
                      :label="lang.submit_form_label_15"
                      box
                    ></v-text-field>
                  </v-flex>
                </div>
              </div>
            </div>
            <!-- Token 아이콘 등록 -->
            <div class="iconWrap" id="iconBox">
              <h2 class="title_sub s24">{{lang.token_form_title_02}} <span class="require">*</span>
                <small>(64X64)</small>
              </h2>
              <p class="desc" v-if="!requireImg">{{lang.require_alert}}</p>
              <p class="desc" v-if="!imgInvalid">* Invalid input format</p>
              <div class="dragWrap">
                <div
                  class="inBox"
                  v-if="imageData.length <= 0"
                  @dragover.prevent @drop="onDrop"
                >
                  <input type="file" id="fileOpen" ref="file" @change="fileOpen" accept="image/*"/>
                  <label for="fileOpen" class="dragLabel">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/submit/icon-upload.png" width="64" class="dragIcon"/>
                    Drop your image here or
                    <span>click to upload it.</span>
                  </label>
                </div>
                <div class="previewBox" v-if="imageData.length > 0">
                  <div class="input">
                    <img
                      class="preview"
                      :src="imageData"
                    />
                    <input type="text" id="fileName" v-model="imgFile" readonly/>
                  </div>
                  <a href="javascript:void(0)" class="clear" @click="fileClear">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/submit/icon-x-white.png"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="agree">
            <!-- 등록 정책 동의 -->
            <div>
              <h2 class="title_sub s24">{{lang.submit_form_tit_07}}<span class="require"> *</span></h2>
              <div class="inputWrap">
                <p class="color_desc">
                  {{lang.submit_token_form_agree_txt}}
                </p>
                <v-radio-group v-model="agreeModel">
                  <v-radio
                    :label="lang.submit_form_agree"
                    value="agree"
                    key="agree"
                    @change="agreeState=true, valid=true"
                  ></v-radio>
                  <v-radio
                    :label="lang.submit_form_disagree"
                    value="disagree"
                    key="disagree"
                    @change="agreeState=false, valid=false"
                  ></v-radio>
                </v-radio-group>
              </div>
            </div>
            <div class="submitBtn">
              <v-btn class="btn grd3" @click="submit" :disabled="!agreeState">{{lang.submit_button}}</v-btn>
              <p>{{lang.submit_button_desc}}</p>
            </div>

            <!-- 완료/실패 snackbar -->
            <v-snackbar
              v-model="success_alert"
              :timeout="timeout"
              vertical="vertical"
              class="success_alert"
            >
              <v-icon>check_circle</v-icon>
              <span>{{ lang.submit_success_alert }}</span>
            </v-snackbar>
            <v-snackbar
              v-model="error_alert"
              :timeout="timeout"
              vertical="vertical"
              class="error_alert"
            >
              <v-icon>report_problem</v-icon>
              <span>{{ lang.submit_error_alert }}</span>
            </v-snackbar>

          </div>
        </v-form>
      </div>
    </div>

    <!-- FAQ -->
    <div class="faqWrap">
      <h2 class="title_l">FAQ</h2>
      <v-expansion-panel>
        <v-expansion-panel-content>
          <template v-slot:actions>
            <v-icon>expand_more</v-icon>
          </template>
          <template v-slot:header>
            <div>{{lang.faq_questions_01}}</div>
          </template>
          <v-card>
            <v-card-text>
              {{lang.faq_answer_01_1}}<br/>
              {{lang.faq_answer_01_2}}
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
          <template v-slot:actions>
            <v-icon>expand_more</v-icon>
          </template>
          <template v-slot:header>
            <div>{{lang.faq_questions_02}}</div>
          </template>
          <v-card>
            <v-card-text>
              {{lang.faq_answer_02}}<br/>
              <div class="link">
                NOVA SDK : <a :href="lang.faq_answer_02_sdk" target="_blank">{{lang.faq_answer_02_sdk}}</a><br/>
                Simple Protocol : <a :href="lang.faq_answer_02_protocol" target="_blank">{{lang.faq_answer_02_protocol}}</a>
              </div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
          <template v-slot:actions>
            <v-icon>expand_more</v-icon>
          </template>
          <template v-slot:header>
            <div>{{lang.faq_questions_03}}</div>
          </template>
          <v-card>
            <v-card-text>
              {{lang.faq_answer_03_1}}
              {{lang.faq_answer_03_2}}
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
          <template v-slot:actions>
            <v-icon>expand_more</v-icon>
          </template>
          <template v-slot:header>
            <div>{{lang.faq_questions_04}}</div>
          </template>
          <v-card>
            <v-card-text>
              {{lang.faq_answer_04}}
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
          <template v-slot:actions>
            <v-icon>expand_more</v-icon>
          </template>
          <template v-slot:header>
            <div>{{lang.faq_questions_05}}</div>
          </template>
          <v-card>
            <v-card-text>
              {{lang.faq_answer_05}}
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>

    <!-- Download -->
    <div class="downWrap dapp" style="margin-top:200px;">
      <div class="inner sm2">
        <div class="txt">
          <h2 class="title_sub s40">DApp/BApp Station</h2>
          <p class="desc">
            {{lang.dappstation_desc_1}}<br/>
            {{lang.dappstation_desc_2}}
          </p>
          <div class="downBox">
            <v-btn href="javascript:void(0)" class="btn" @click="href('/dapp/ETH')">
              {{lang.dappstation_link_btn}}
            </v-btn>
          </div>
        </div>
        <div class="imgCon">
          <img :src="lang.dappstation_img"/>
        </div>
      </div>
    </div>

    <!-- loading -->
    <div class="loadingWrap" v-if="loading">
      <v-progress-circular
        :size="120"
        :width="6"
        color="white"
        indeterminate
      ></v-progress-circular>
    </div>

    <footer-con></footer-con>
  </div>
</template>

<script>

  import headerCon from './headerCon'
  import footerCon from './footerCon'
  import { langPr, langTitle, langRes, langEvent } from '../../translations/langEvent'
  import { langText } from '../../translations/language'
  import axios from 'axios'

  export default {
    name: "submitToken",
    components: {
      'header-con': headerCon,
      'footer-con': footerCon
    },
    data() {
      return {
        success_alert: false,
        error_alert: false,
        team: [],
        token: [],
        contract:'',
        sns: [],
        lang: langRes,
        valid: false,
        chainCategory: ['ETH', 'EOS', 'Klaytn', 'BOSCore'],
        tokenCategory: ['game', 'gambling', 'social', 'resource', 'tool', 'exchange'],
        icoCategory: ['No Plan to Fun ICO', 'Plan to Run ICO', 'Running ICO', 'Completed ICO', 'etc'],
        agreeValue: '',
        agreeModel: 'disagree',
        agreeState: false,
        imgFile : '',
        filePath : [],
        fileAdd : false,
        imageData : '',
        requireImg: true,
        imgInvalid: true,
        requireAlert:'',
        rules: {
          required: value => !!value || '*Mandatory Information',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || '*Invalid input format'
          },
          url: value => {
            const pattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
            return pattern.test(value) || '*Invalid input format'
          },
          symbol: value => {
            const pattern = /([A-Z]$)/
            return pattern.test(value) || '*Invalid input format'
          }
        },
        loading : false,
        timeout : 3000,
      }
    },
    watch: {
      '$route': 'fetchData',
    },
    mounted() {
      this.fetchData();
      this.valid = false;
    },
    created() {
      this.$EventBus.$on('lang_event', (tit) => {
        if (tit === '한글') {
          this.lang = [];
          this.lang = langText['ko'];
        }
        else if( tit === '中文' ){
          this.lang = [];
          this.lang = langText['zh'];
        }
        else {
          this.lang = [];
          this.lang = langText['en'];
        }
      });
    },
    methods: {
      fetchData() {
        langEvent();
        this.lang = langRes;
      },
      href(path) {
        let name = path;
        let langParam = langPr;
        this.$router.push({path: name, query: {l: langParam}});
      },
      onDrop(e){
        e.stopPropagation();
        e.preventDefault();
        let files = e.dataTransfer.files;
        if (files.length) {
          let file = files[0];
          if (!/^image\//.test(file.type)) {
            this.imgInvalid = false;
            this.requireImg = true;
            return false;
          }
          this.imgFile = file.name;
          this.filePath = file;
          if (typeof file === 'string') {
            this.imageData = file;
          } else {
            let reader = new FileReader();
            reader.onload = () => {
              this.imageData = reader.result;
            }
            reader.readAsDataURL(file);
            this.fileAdd = true;
            this.requireImg = true;
            this.imgInvalid = true;
          }
        }
      },
      fileOpen(e){
        let fileName = e.target.files[0].name;
        let input = e.target;
        if (!/^image\//.test(input.files[0].type)) {
          this.imgInvalid = false;
          this.requireImg = true;
          return false;
        }
        else{
          if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
              this.imageData = e.target.result;
            }
            reader.readAsDataURL(input.files[0]);
            this.imgInvalid = true;
            this.imgFile = fileName;
            this.filePath = this.$refs.file.files[0];
            this.fileAdd = true;
            this.requireImg = true;
          }
        }
      },
      fileClear(){
        this.imgFile = '';
        this.filePath = [];
        this.fileAdd = false;
        this.imageData = '';
        this.requireImg = false;
        this.imgInvalid = true;
      },
      submit() {
        if (this.$refs.form.validate()) {
          if (this.fileAdd) {
            this.requireImg = true;
            this.loading = true;
            let formData = new FormData(),
              time = +new Date(),
              iconFileName = time + '_' + this.token[0] + '_' + this.token[2];
            formData.append('file', this.filePath);
            formData.append('iconName', iconFileName);
            axios.post('/api/tokenIcon', formData, {headers: {'Content-Type': 'multipart/form-data'}})
              .then(() => {
                let data = new URLSearchParams();
                data.append('team', this.team);
                data.append('token', this.token);
                data.append('contract', this.contract);
                data.append('sns', this.sns);
                axios.post('/api/submitToken', data)
                  .then(() => {
                    this.loading = false;
                    this.$refs.form.reset();
                    this.fileClear();
                    this.requireImg = true;
                    this.agreeValue = false;
                    this.success_alert = true;
                    this.agreeModel = 'disagree';
                  })
                  .catch(() => {
                    this.error_alert = true;
                    this.loading = false;
                    console.log('submit token api err!!@@');
                  })
              })
              .catch(() => {
                this.error_alert = true;
                this.loading = false;
                console.log('icon upload err');
              })
          } else {
            this.requireImg = false;
            let iconBox = document.getElementById('iconBox').offsetTop - 250;
            window.scrollTo(0, iconBox);
          }
        }
      },
      toUppercase(){
        this.token[2] = this.token[2].toUpperCase();
      },
    }
  }
</script>

<style scoped>

</style>
