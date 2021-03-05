<template>
  <div class="panel-body">
    <vue-form-generator
      :schema="schema"
      :model="model"
      :options="formOptions"
    ></vue-form-generator>
  </div>
</template>

<script>
import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'

Vue.use(VueFormGenerator)

export default {
  props: ['type'],
  data() {
    return {
      model: {
        name: '',
        email: '',
        phoneNo: '',
        description: '',
        type: 'counselling',
      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Name',
            model: 'name',
            placeholder: 'Your name here',
            featured: true,
            required: true,
            validator: ['required'],
          },
          {
            type: 'input',
            inputType: 'email',
            label: 'Email',
            model: 'email',
            placeholder: 'Your email here',
            featured: true,
            required: true,
            validator: ['required'],
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Phone Number',
            model: 'phoneNo',
            placeholder: 'Your Phone Number here',
            featured: true,
            required: true,
            validator: ['required'],
          },
          {
            type: 'textArea',
            inputType: 'text',
            label: 'Description',
            model: 'description',
            placeholder: 'Describe your request here',
            featured: true,
            required: true,
            rows: 3,
            validator: ['required'],
          },
          {
            type: 'submit',
            onSubmit: (model) => {
              this.saveQuery()
            },
            label: '',
            buttonText: 'Submit',
            validateBeforeSubmit: true,
          },
        ],
      },
      formOptions: {
        validateAfterLoad: false,
        validateAfterChanged: true,
        validateAsync: true,
      },
    }
  },
  methods: {
    async saveQuery() {
      const response = await this.$repositories.home.submitQuery(this.model)
    },
  },
}
</script>

<style>
fieldset {
  border: none !important;
  margin: 0 !important;
}

.form-group {
  display: flex;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #f5f5f5;
  align-items: center;
}

.form-group:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

label {
  margin-right: 20px;
  width: 20%;
}

input[type='submit'] {
  border: none !important;
  font-size: 1.25rem;
  padding: 1rem 2rem;
  color: white;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  background: linear-gradient(90deg, #f26a3e, #fb8133, #f26a3e);
  background-size: 200%;
  transition: background-position 0.25s;
}

input[type='submit']:hover {
  background-position: right;
}

.field-wrap {
  flex: 1;
}
</style>
