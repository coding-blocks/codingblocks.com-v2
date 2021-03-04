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
  data() {
    return {
      model: {
        name: '',
        email: '',
        phone_number: '',
        description: '',
        type: '',
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
          },
          {
            type: 'input',
            inputType: 'email',
            label: 'Email',
            model: 'email',
            placeholder: 'Your email here',
            featured: true,
            required: true,
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Phone Number',
            model: 'phone_number',
            placeholder: 'Your Phone Number here',
            featured: true,
            required: true,
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Description',
            model: 'description',
            placeholder: 'Describe your request here',
            featured: true,
            required: true,
          },
        ],
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true,
      },
    }
  },
}
</script>
