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
