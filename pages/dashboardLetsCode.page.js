const { executeStep } = require("../utilities/action");
const data = require("../data/data.json");
const { expect } = require("@playwright/test");
require("dotenv").config();

exports.DashboardPage = class DashboardPage{
constructor(test,page){
    this.test = test;
    this.page = page;
    this.workSpace=page.locator("//a[@id='testing']")
    this.inputpage=page.locator("//a[@href='/edit']")
    this.nameInputFeild=page.locator("//input[@id='fullName']")
}
async launchUrlLetsCode() {
    await this.page.goto(process.env.baseUrlLetsCode)
  }
async inputFeildOperations(){
    await executeStep(this.test,this.workSpace,"click","Click on WorkSpace link")
    await executeStep(this.test,this.inputpage,"click","Click on inputpage link")
    await executeStep(this.test,this.nameInputFeild,"fill","Click on WorkSpace link",[data.personalDetails.fullname])
    const  value = this.nameInputFeild.inputValue()
    expect(await value).toContain("karthik raja")
}
}