import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ResultComponent } from './components/result/result.component';
import { ErrorComponent } from './components/error/error.component';
import { AskUniversityPresidentComponent } from './components/about/ask-university-president/ask-university-president.component';
import { ConferencesComponent } from './components/about/conferences/conferences.component';
import { ConnectComponent } from './components/about/connect/connect.component';
import { FacingCoronaComponent } from './components/about/facing-corona/facing-corona.component';
import { PrivacyPolicyComponent } from './components/about/privacy-policy/privacy-policy.component';
import { SiteMapComponent } from './components/about/site-map/site-map.component';
import { UniversityVisionComponent } from './components/about/info/university-vision/university-vision.component';
import { UniversityRankingComponent } from './components/about/info/university-ranking/university-ranking.component';
import { UniversityPresidentComponent } from './components/about/info/university-president/university-president.component';
import { UniversityMessageComponent } from './components/about/info/university-message/university-message.component';
import { UniversityGoalsComponent } from './components/about/info/university-goals/university-goals.component';
import { HistoryComponent } from './components/about/info/history/history.component';
import { FactsComponent } from './components/about/info/facts/facts.component';
import { CollegesComponent } from './components/academic-affairs/colleges/colleges.component';
import { ElectronicServicesComponent } from './components/academic-affairs/electronic-services/electronic-services.component';
import { PostgraduateProgramComponent } from './components/academic-affairs/postgraduate-program/postgraduate-program.component';
import { AvailableOnlineServicesComponent } from './components/academic-affairs/electronic-service/available-online-services/available-online-services.component';
import { CurrentServicesComponent } from './components/academic-affairs/electronic-service/current-services/current-services.component';
import { GeneralServicesComponent } from './components/academic-affairs/electronic-service/general-services/general-services.component';
import { HolidayComponent } from './components/academic-affairs/electronic-service/holiday/holiday.component';
import { PersonnelServicesComponent } from './components/academic-affairs/electronic-service/personnel-services/personnel-services.component';
import { ServicesOfFacultyComponent } from './components/academic-affairs/electronic-service/services-of-faculty/services-of-faculty.component';
import { DepartmentOfInsuranceAndPensionsComponent } from './components/academic-affairs/electronic-service/Departments/department-of-insurance-and-pensions/department-of-insurance-and-pensions.component';
import { DepartmentOfSpecialStaffAffairsComponent } from './components/academic-affairs/electronic-service/Departments/department-of-special-staff-affairs/department-of-special-staff-affairs.component';
import { EmployeeWelfareDepartmentComponent } from './components/academic-affairs/electronic-service/Departments/employee-welfare-department/employee-welfare-department.component';
import { GeneralStaffAffairsDepartmentComponent } from './components/academic-affairs/electronic-service/Departments/general-staff-affairs-department/general-staff-affairs-department.component';
import { PublicDepartmentComponent } from './components/academic-affairs/electronic-service/Departments/public-department/public-department.component';
import { ElectronicDeliveryComponent } from './components/academic-affairs/electronic-service/electronic-ser/electronic-delivery/electronic-delivery.component';
import { IntegrityCheckComponent } from './components/academic-affairs/electronic-service/electronic-ser/integrity-check/integrity-check.component';
import { TitleOfScientificThesesComponent } from './components/academic-affairs/electronic-service/electronic-ser/title-of-scientific-theses/title-of-scientific-theses.component';
import { LibrariesComponent } from './components/Research/libraries/libraries.component';
import { MoreLibrariesComponent } from './components/Research/more-libraries/more-libraries.component';
import { NewsComponent } from './components/Research/news/news.component';
import { ScientificAwardsComponent } from './components/Research/scientific-awards/scientific-awards.component';
import { ScientificJournalsComponent } from './components/Research/scientific-journals/scientific-journals.component';
import { ScientificMessagesComponent } from './components/Research/scientific-messages/scientific-messages.component';
import { SectorNewsComponent } from './components/Research/sector-news/sector-news.component';
import { WorkshopsComponent } from './components/Research/workshops/workshops.component';
import { AwardComponent } from './components/Research/awards/award/award.component';
import { BestMasterOrPhDThesisComponent } from './components/Research/awards/best-master-or-ph-d-thesis/best-master-or-ph-d-thesis.component';
import { InternationalScientificPublishingComponent } from './components/Research/awards/international-scientific-publishing/international-scientific-publishing.component';
import { PatentComponent } from './components/Research/awards/patent/patent.component';
import { WorkShop1Component } from './components/Research/workShop/work-shop1/work-shop1.component';
import { WorkShop2Component } from './components/Research/workShop/work-shop2/work-shop2.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ActionRequiredComponent } from './components/academic-affairs/postgraduate-programs/action-required/action-required.component';
import { AdmissionDateComponent } from './components/academic-affairs/postgraduate-programs/admission-date/admission-date.component';
import { ScrollComponent } from './components/scroll/scroll.component';
import { GraduateStudiesHandbooksComponent } from './components/academic-affairs/postgraduate-programs/graduate-studies-handbooks/graduate-studies-handbooks.component';
import { PostgraduateBylawsComponent } from './components/academic-affairs/postgraduate-programs/postgraduate-bylaws/postgraduate-bylaws.component';
import { StudentsComponent } from './components/student/students/students.component';
import { LoginComponent } from './components/academic-affairs/login/login.component';
import { UniversityJournalComponent } from './components/university-journal/university-journal.component';
import { AdminResultComponent } from './components/admin/admin-result/admin-result.component';
import { AdminNewsComponent } from './components/admin/admin-news/admin-news.component';
import { AdminStudentComponent } from './components/admin/admin-student/admin-student.component';
import { AdminEmployeesComponent } from './components/admin/admin-employees/admin-employees.component';
import { AdminMagazineComponent } from './components/admin/admin-magazine/admin-magazine.component';
import { AdminMainComponent } from './components/admin/admin-main/admin-main.component';
import { ViewAllNewsComponent } from './components/view-all-news/view-all-news.component';
import { SingleEventComponent } from './components/single-event/single-event.component';
import { AdminTicketComponent } from './components/admin/admin-ticket/admin-ticket.component';
import { StudentTicketComponent } from './components/student/student-ticket/student-ticket.component';
import { PortalComponent } from './components/student/portal/portal.component';
import { ChatComponent } from './components/student/chat/chat.component';
import { RequestReviewComponent } from './components/student/request-review/request-review.component';
import { RequestsProgressComponent } from './components/student/requests-progress/requests-progress.component';
import { CompletedRequestComponent } from './components/student/completed-request/completed-request.component';
import { AdminCompletedRequestComponent } from './components/admin/admin-completed-request/admin-completed-request.component';
import { AdminRequestReviewComponent } from './components/admin/admin-request-review/admin-request-review.component';
import { AdminRequestsProgressComponent } from './components/admin/admin-requests-progress/admin-requests-progress.component';
import { AdminChatComponent } from './components/admin/admin-chat/admin-chat.component';
import { AboutUsComponent } from './components/about/about-us/about-us.component';
import { ImagePipePipe } from './pipe/image-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { ExamsComponent } from './components/admin/exams/exams.component';
import { LecturesComponent } from './components/admin/lectures/lectures.component';
import { SearchComponent } from './components/search/search.component';
import { SearchJournalComponent } from './components/search-journal/search-journal.component';
import { RoleComponent } from './components/admin/role/role.component';
import { PageNavigationComponent } from './components/admin/pageNavigations/page-navigation/page-navigation.component';
import { CourseComponent } from './components/admin/student-info/course/course.component';
import { StudentResultComponent } from './components/admin/student-info/student-result/student-result.component';
import { ScholarshipsComponent } from './components/student/scholarships/scholarships.component';
import { PostgraduateComponent } from './components/student/postgraduate/postgraduate.component';
import { YouthcareComponent } from './components/student/youthcare/youthcare.component';
import { ActivitiesComponent } from './components/societyactivity/activities/activities.component';
import { ManagementComponent } from './components/projects/management/management.component';
import { CalendarCComponent } from './components/projects/calendar-c/calendar-c.component';
import { INcooperationComponent } from './components/projects/incooperation/incooperation.component';
import { GuesthouseComponent } from './components/guesthouse/guesthouse.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultComponent,
    ErrorComponent,
    AskUniversityPresidentComponent,
    ConferencesComponent,
    ConnectComponent,
    FacingCoronaComponent,
    PrivacyPolicyComponent,
    SiteMapComponent,
    UniversityVisionComponent,
    UniversityRankingComponent,
    UniversityPresidentComponent,
    UniversityMessageComponent,
    UniversityGoalsComponent,
    HistoryComponent,
    FactsComponent,
    CollegesComponent,
    ElectronicServicesComponent,
    PostgraduateProgramComponent,
    AvailableOnlineServicesComponent,
    CurrentServicesComponent,
    GeneralServicesComponent,
    HolidayComponent,
    PersonnelServicesComponent,
    ServicesOfFacultyComponent,
    DepartmentOfInsuranceAndPensionsComponent,
    DepartmentOfSpecialStaffAffairsComponent,
    EmployeeWelfareDepartmentComponent,
    GeneralStaffAffairsDepartmentComponent,
    PublicDepartmentComponent,
    ElectronicDeliveryComponent,
    IntegrityCheckComponent,
    TitleOfScientificThesesComponent,
    LibrariesComponent,
    MoreLibrariesComponent,
    NewsComponent,
    ScientificAwardsComponent,
    ScientificJournalsComponent,
    ScientificMessagesComponent,
    SectorNewsComponent,
    WorkshopsComponent,
    AwardComponent,
    BestMasterOrPhDThesisComponent,
    InternationalScientificPublishingComponent,
    PatentComponent,
    WorkShop1Component,
    WorkShop2Component,
    HeaderComponent,
    FooterComponent,
    ActionRequiredComponent,
    AdmissionDateComponent,
    ScrollComponent,
    GraduateStudiesHandbooksComponent,
    PostgraduateBylawsComponent,
    StudentsComponent,
    LoginComponent,
    UniversityJournalComponent,
    AdminResultComponent,
    AdminNewsComponent,
    AdminStudentComponent,
    AdminEmployeesComponent,
    AdminMagazineComponent,
    AdminMainComponent,
    ViewAllNewsComponent,
    SingleEventComponent,
    AdminTicketComponent,
    StudentTicketComponent,
    PortalComponent,
    ChatComponent,
    RequestReviewComponent,
    RequestsProgressComponent,
    CompletedRequestComponent,
    AdminCompletedRequestComponent,
    AdminRequestReviewComponent,
    AdminRequestsProgressComponent,
    AdminChatComponent,
    AboutUsComponent,
    ImagePipePipe,
    ExamsComponent,
    LecturesComponent,
    SearchComponent,
    SearchJournalComponent,
    RoleComponent,
    PageNavigationComponent,
    CourseComponent,
    StudentResultComponent,
    ScholarshipsComponent,
    PostgraduateComponent,
    YouthcareComponent,
    ActivitiesComponent,
    ManagementComponent,
    CalendarCComponent,
    INcooperationComponent,
    GuesthouseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

})
export class AppModule { }
