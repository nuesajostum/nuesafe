import React from "react";
import constImg from "../../Assets/Nuesa logo.png";

const Constitution = () => {
  return (
    <div>
      <section id="topics">
        <div className="container-md">
          <div className="text-center">
            <h2>The Constitution</h2>
            <p className="lead text-muted"> About the Constitution</p>
          </div>

          <div className="row my-5 justify-content-around align-items-center">
            <div className="col-6 col-lg-4">
              <img src={constImg} className="img-fluid" alt="Book" />
            </div>

            <div className="col-lg-6">
              {/***************** accordion *********/}

              <div className="accordion" id="chapters">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-1">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-1"
                      aria-expanded="true"
                      aria-controls="chapter-1"
                    >
                      SECTION 1 <br />NAME AND SUPREMACY OF THE CONSTITUTION 
                    </button>
                  </h2>
                  <div
                    id="chapter-1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="heading-1"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        1. The document shall be known and referred to as “The
                        Constitution of the Nigerian Universities Engineering
                        Students Association (NUESA), Joseph Sarwuan Tarka
                        University Makurdi Chapter, herein after called the
                        Constitution.
                        <br />
                        2. The constitution is supreme but subject to the rules
                        and regulations of the university and its provision
                        shall be binding on all members of the association.{" "}
                        <br />
                        3. If any other law, resolution, directive or action
                        shall to the extent of the inconsistency be declared
                        null and void.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-2">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-2"
                      aria-expanded="false"
                      aria-controls="chapter-2"
                    >
                      SECTION <br/>AFFILIATION AND MOTTO
                    </button>
                  </h2>
                  <div
                    id="chapter-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-2"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        1. This association shall be affiliated to the National
                        body of the Nigerian Universities Engineering Students
                        Association (NUESA) and the Nigerian Society of
                        Engineers and any other body this is engineering
                        oriented. <br />
                        2. The Motto of the association shall be: “TOWARDS
                        INDIGENOUS TECHNOLOGICAL ADVANCEMENT”.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-2i">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-2i"
                      aria-expanded="false"
                      aria-controls="chapter-2i"
                    >
                      SECTION 3 <br />AIMS AND OBJECTIVES 
                    </button>
                  </h2>
                  <div
                    id="chapter-2i"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-2i"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        i. To protect and uphold the image of the college of
                        engineering and the engineering profession within and
                        outside the University community.
                        <br />
                        ii. To foster mutual understanding, spirit of
                        togetherness and good relationship among all Engineering
                        students, college departmental associations, person(s)
                        and any other body connected with Engineering.
                        <br />
                        iii. To protect, defend and jealously guide the right
                        and privileges of members of the association.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-3">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-3"
                      aria-expanded="false"
                      aria-controls="chapter-3"
                    >
                      Article 1 <br/> GENERAL PROVISIONS
                    </button>
                  </h2>
                  <div
                    id="chapter-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-3"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        Preamble:<br /> We the entire students of the College of
                        Engineering, Joseph sarwuan Tarka University Makurdi,
                        Nigeria and members of the Nigerian Universities
                        Engineering Students Association, Joseph sarwuan Tarka
                        University, Makurdi Chapter conscious of our role in
                        technological and industrial development in Nigeria and
                        the relevance and importance of the supreme profession
                        of Engineering in general having <br />
                        i. Recognized the need to emancipate the nation from
                        technological and industrial backwardness and the need
                        to lead her to breakthrough in technological and
                        industrial frontiers. <br />
                        ii. Realized the need to come together as a progressive,
                        virile and truly democratic student body in order to
                        speak unequivocally against any violation of rights of
                        the students of the college of engineering, Joseph
                        Sarwuan Tarka University, Makurdi.
                        <br />
                        iii. Recognized the need to develop the political,
                        social and educational activities of the Engineering
                        students for the growth of progressive professionalism
                        among the members and appreciate the problems of our
                        various branches in other institutions as depicted by
                        the national body. <br />
                        iv. Determined and dedicated to work for the
                        actualization of the aims and objectives of the
                        association do hereby as responsible citizen of Nigeria,
                        MAKE, ENACT AND GIVE TO OURSELVES the following
                        constitution.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-4">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-4"
                      aria-expanded="false"
                      aria-controls="chapter-4"
                    >
                      ARTICLE 2 - Section One (1) <br />
                      ORGANS OF OPERATION AND ADMINISTRATIVE STRUCTURE OF THE
                      ASSOCIATION
                    </button>
                  </h2>
                  <div
                    id="chapter-4"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-4"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        1. The following organs of operation shall exist in the
                        association: <br/>i. The Executive Committee of NUESA -JOSTUM<br/>
                        ii. The entire members of NUESA-JOSTUM <br/>iii. Any
                        committee of panel that may be set up by the executive
                        committee or the congress from time to time as may be
                        deemed necessary. <br/>2. The Executive committee of the
                        association shall be composed of the following for the
                        effective implementation and achievement of the aims and
                        objectives of the association. <br/>i. President <br/>ii. Vice
                        president<br/> iii. General secretary <br/>iv. Assistant secretary
                        general <br/>v. Financial secretary <br/>vi. Treasurer vii.
                        Director of socials viii. Public relations officer <br/>ix.
                        Ex-official (i) <br/>x. Ex-official (ii)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-5">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-5"
                      aria-expanded="false"
                      aria-controls="chapter-5"
                    >
                      ARTICLE 2 - Section Two (2) <br />
                      GENERAL FUNCTIONS OF THE EXECUTIVE COMMITTEE
                    </button>
                  </h2>
                  <div
                    id="chapter-5"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-5"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        i. NUESA-JOSTUM Executive committee shall be responsible
                        for upholding and defending the constitutional aims and
                        objectives of the association.<br/> ii. Shall be responsible
                        for the execution of views and policies of the congress
                        and also for the day-to-day administration of the
                        association. <br/>iii. Shall resist any attempt by
                        individuals or organisations to use or misuse the
                        association for his/her personal interests. <br/>iv. Shall
                        present the association views to the college and
                        administration and any other authority within or outside
                        the university on any issue of common interest.<br/> v. Shall
                        have power to appoint from its members officers to act
                        in the absence of any substantive officer. <br/>vi. The
                        president with the consent of the executive may invite
                        any full member of the association to any proceedings
                        for purpose of advice in the deliberations of the
                        executive committee council but such an invited
                        person(s) shall have no voting power. <br/>vii. Shall take
                        charge of all association’s properties. <br/>viii. Shall
                        exercise all such powers and carry out all such duties
                        as shall herein after be allocated to them under any
                        section sections of this constitution. <br/>ix. Its tenure
                        shall not exceed one academic session.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-6">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-6"
                      aria-expanded="false"
                      aria-controls="chapter-6"
                    >
                      ARTICLE 2 - Section Three (3) <br />
                      DUTIES OF EXECUTIVE COMMITTEE MEMBERS
                    </button>
                  </h2>
                  <div
                    id="chapter-6"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-6"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        THE PRESIDENT The president shall;<br/> i. Co-ordinate the
                        activities of the association as the chief executive.<br/>
                        ii. Direct the secretary general to summon meetings of
                        the executive committee. <br/>iii. Preside over all the
                        executive meetings and general congress of the
                        association. <br/>iv. Be answerable to the executive
                        committee and if need be, to the congress.<br/> v. Be a
                        co-signatory to the association’s account. <br/>vi. Represent
                        the interest of the association at functions which the
                        association is invited or involved.<br/> vii. Have the power
                        to in good faith, approve or reject financial
                        propositions or vouchers raised by any other official
                        where same is deemed questionable and or unnecessary.<br/>
                        viii. Ensure that all resolutions passed during meetings
                        are executed promptly. <br/>ix. Enter into contract agreement
                        on behalf of the associations provided such agreement
                        does not contravene the aims and objectives of the
                        associations and so long such agreement is not for
                        selfish interest. <br/>x. Make appointments where necessary
                        and by delegation of authority and powers for effective
                        running of the association. <br/>xi. Network the association
                        with the national secretariat of NUESA and other
                        Engineering related bodies. <br/>xii. Carry out all other
                        duties as may be assigned to him/her by the association.
                      </p>
                      <p>
                        THE VICE PRESIDENT The vice president shall; <br/>i. Deputise
                        for and assist the president in all his duties. <br/>ii. Act
                        in the capacity of the president in his absence or by
                        delegation of the president’s authority.<br/> iii. Perform
                        any other duties as may be assigned to him by the
                        executive committee and by the president.
                      </p>
                      <p>
                        THE GENERAL SECRETARY The General secretary shall; <br/>i.
                        Process all receipt correspondence of the association.<br/>
                        ii. Serve as secretary take minutes and keep minutes of
                        proceedings at executive committee meetings and general
                        congress of the association. <br/>iii. Compile and present to
                        the association a full report of all the activities of
                        the association within the period of the tenure of
                        office. <br/>iv. Summon all the executive committee meetings
                        and general congress at the directive of the president.<br/>
                        v. Delegate responsibilities to the assistant general
                        secretary when necessary. <br/>vi. Perform any other duties
                        as may be assigned to him by the executive committee and
                        the president.
                      </p>
                      <p>
                        ASSISTANT GENERAL SECRETARY The assistant general
                        secretary;<br/> i. Deputise for and assist the general
                        secretary in his duties.<br/> ii. Act for the general
                        secretary in the absence of the later or by delegation
                        of authority. <br/>iii. Perform any other duties as may be
                        assigned to him by the executive committee and the
                        president.
                      </p>
                      <p>
                        FINANCIAL SECRETARY The financial secretary shall; <br/>i. Be
                        responsible for all matters, of dues, debts, collection
                        and disbursement of funds and keeping accounts of the
                        association’s financial activities. <br/>ii. Advice the
                        executive committee on control of expenditure.<br/> iii. Keep
                        record of all payment made to or by NUESA-JOSTUM. <br/>iv. Be
                        responsible for the collection of dues and registration
                        fees conjunction with the treasurer. <br/>v. Prepare and
                        present an annual financial report to the executive
                        committee and upon approval of such shall present the
                        report to the general congress. <br/>vi. Handover all monies
                        collected to the treasurer within forty-eight hours
                        (48hrs) and collect receipts for such payments. <br/>vii. Be
                        a co-signatory to all accounts of the associations.<br/>
                        viii. Perform any other functions assigned to him by the
                        executive committee and the president.
                      </p>
                      <p>
                        THE TREASURER The treasurer shall;<br/> i. Receive all monies
                        accrued to the association and save them within
                        twenty-four (24) hours into the Bank account(s)<br/> ii.
                        Release receipts on receipt of payment of vouchers. <br/>iii.
                        Prepare and submit statements of accounts for adding to
                        the executives committee at the meeting to be decided by
                        the president. <br/>iv. Be a co-signatory to the associations
                        account(s). <br/>v. Keep and maintain imprest of not more
                        than N1000.00 <br/>vi. Carry out all other functions as may
                        be assigned to him by the executive committee and the
                        president.
                      </p>
                      <p>
                        THE DIRECTOR OF SOCIALS The director of socials shall;<br/>
                        i. Co-ordinate all the social activities of the
                        association. <br/>ii. Be responsible for the association’s
                        entertainment in any social activity of the association.<br/>
                        iii. Chairman any social committee formed. <br/>iv. Perform
                        any other duties that may be assigned to him by the
                        executive committee and the president.
                      </p>
                      <p>
                        PUBLIC RELATIONS OFFICER The pubic relation officer
                        shall; <br/>i. Circulate notice of meetings and agenda of
                        such meetings of the association.<br/> ii. Maintain records
                        of information services for the association.<br/> iii.
                        Organize and manage venue of meetings and functions of
                        the association. <br/>iv. Be the spokesperson for the
                        association. <br/>v. Perform any other function as may be
                        assigned to him by the executive committee and the
                        president.
                      </p>
                      <p>
                        EX OFFICIAL (I) AND (II) The Ex-official (i) and (ii)
                        shall; <br/>1. Provide valuable insights and guidance to the
                        association’s board of excos with their expertise and
                        experience. <br/>2. Must be ready to support, build and
                        influence which can be of help to the board of executive
                        members in fundraising efforts or strategic partnerships
                        and collaborations for the good of the college. <br/>3. From
                        their previous experience, should provide continuity and
                        institutional memory to the executive members of the
                        association. <br/>4. Must not fail to advice and disclose
                        information of value to the association
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-7">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-7"
                      aria-expanded="false"
                      aria-controls="chapter-7"
                    >
                      ARTICLE 2 - Section Four (4) <br />
                      MEMBERSHIP, REGISTRATION FEES/DUES AND PRIVILEGES
                    </button>
                  </h2>
                  <div
                    id="chapter-7"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-7"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        i. Membership to NUESA-JOSTUM is automatic for all the
                        students of the college of engineering, Joseph Sarwuan
                        Tarka University, Makurdi. <br/>ii. a). All members of the
                        association (NUESA) shall pay an annual dues of four
                        hundred naira only (N400).<br/> b). a) above is subject to
                        increment as the need may arise and such increment must
                        not be more than fifty naira (N50) and must be decided
                        in a general congress of the association with the dean
                        of the college or a representative of the dean in
                        attendance. <br/>viii. Members of the association shall have
                        the privilege to; <br/>a). Use facilities provided and
                        recognized by the association.<br/> b). Vote and be voted for
                        in approved association elections.<br/> c). Attend,
                        contribute and vote for motions at general congress. <br/>d).
                        Participate in all activities and functions recognized
                        or organized by NUESA.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-8">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-8"
                      aria-expanded="false"
                      aria-controls="chapter-8"
                    >
                      ARTICLE 2 - Section Five (5) <br />
                      PATRONS, GRAND PATRONS, DUTIES AND DURATION OF OFFICE
                    </button>
                  </h2>
                  <div
                    id="chapter-8"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-8"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        i. The executive committee shall choose a grand patron
                        who shall be the dean of the college and four other
                        patrons who must be senior lecturers in their different
                        departments. <br/>ii. The duration of office of the patrons
                        shall be for one academic session and may be reappointed
                        for another term only. <br/>iii. The duties of the grand
                        patron and patrons shall include the followings; <br/>a.
                        Assisting the association morally and financially.<br/> b.
                        Meeting with the association members either generally or
                        through their representative(s) when such need arises.<br/>
                        c. Giving his/her maximum support to any program
                        embarked upon by the association. <br/>d. Assisting the
                        association in the effective and efficient achievement
                        of the association’s aims and objectives.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-9">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-9"
                      aria-expanded="false"
                      aria-controls="chapter-9"
                    >
                      ARTICLE 3 - Section One (1) <br />
                      ASSOCIATION’S MEETINGS AND STANDING ORDERS
                    </button>
                  </h2>
                  <div
                    id="chapter-9"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-9"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        1. ASSOCIATION’S MEETING <br/>i. There shall be general
                        meetings of the association which must be held at least
                        twice in a semester. The time is to be determined by the
                        executive committee (exco). <br/>ii. The emergency meeting
                        shall be held whenever the EXCO deems necessary. <br/>iii.
                        The EXCO shall have a minimum of three meetings in a
                        semester and maximum of seven meetings in a session.<br/> iv.
                        Fourth-seventh (4/7) of the EXCO shall form a quorum
                        with the exception of the president voting. In the
                        absence of any of the EXCO, the quorum shall be by
                        simple majority.<br/> v. There shall be annual general
                        congress of the association which shall be held three
                        weeks to the end of the tenure of office of serving EXCO
                        members. <br/>vi. An electoral committee that will conduct
                        the election for the incoming executive shall be
                        constituted during the annual general congress.<br/> vii.
                        Notice of general meeting or congress shall reach
                        members thirty-six (36) hours before any scheduled
                        meetings. <br/>viii. Two-third of members present at any
                        general meeting or congress shall form a quorum. <br/>ix. The
                        proceedings for the EXCO and general meetings shall be
                        stipulated in section (2) of this article.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-10">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-10"
                      aria-expanded="false"
                      aria-controls="chapter-10"
                    >
                      ARTICLE 3 - Section Two (2) <br />
                      STANDING ORDERS
                    </button>
                  </h2>
                  <div
                    id="chapter-10"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-10"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        1. The orders of business shall be followed in the
                        sequence below; <br/>a. The meetings shall commence with an
                        opening prayer<br/> b. There shall be an opening remark by
                        the president. <br/>c. The minutes of the previous meeting
                        shall be read by the secretary general. <br/>d. There shall
                        be adoption of the minute in (c) above. <br/>e. The formal
                        business of the day shall then be open. <br/>f. There shall
                        be a closing prayer. <br/>2. a. All motion shall have a
                        proposer and a seconder and shall be forwarded to the
                        secretary. <br/>b. A proposer motion shall lack consideration
                        merit if both the proposer and seconder are absent
                        during the meeting. It is for consideration. <br/>3. During
                        debates <br/>a. A member of the congress shall stand up when
                        speaking and shall address the president and the
                        congress before speaking.<br/> b. The proposer of a motion
                        shall be invited by the president to introduce his
                        motion and a seconder shall follow. <br/>c. Debate shall be
                        limited to the immediate issue at hand. <br/>d. The proposer
                        of a motion shall reply to the debate or the motion and
                        in reply shall limit himself/herself to answering
                        statements or arguments made in the course of the
                        debate. <br/>e. Members shall be restrained from the use of
                        foul language, making interventions or doing anything
                        that may likely disrupt the proceedings. <br/>f. The
                        president or presiding officer shall rule in matters on
                        which the constitution is silent and his/her ruling
                        shall only be reversed by two-third (2/3) majority of
                        the members present at the congress or meeting.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-11">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-11"
                      aria-expanded="false"
                      aria-controls="chapter-11"
                    >
                      ARTICLE 3 - Section Three (3) <br />
                      DISCIPLINE
                    </button>
                  </h2>
                  <div
                    id="chapter-11"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-11"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        Discipline shall be strongly and strictly imposed within
                        the association and any member who commits any offence
                        shall be liable to punishment as provided in this
                        constitution or as may be decided by the members of the
                        association in a general congress. The offences among
                        others include the following; <br/>1. Any EXCO member that
                        fails to attend two consecutive meetings without any
                        tangible reason(s) shall have his/her post declared
                        vacant. But will be given the chance to defend him or
                        herself. <br/>2. The EXCO shall suspend an officer or a
                        member from office as well as any member of a committee
                        on the ground of gross misconduct, inefficiency,
                        misappropriation and negligence.<br/> 3. Actions which are
                        likely to bring the association and its members to
                        ridicule, disrespect or contempt. <br/>4. Any member/officer
                        found guilty of misappropriation of association’s fund
                        or property shall be suspended and be made to refund
                        same. <br/>5. Any official who takes unilateral actions or
                        acts in any way so as to sabotage, undermine or infringe
                        upon the provision of this constitution shall be
                        removed. Such removal shall be passing of vote of no
                        confidence on the affected officer by the congress. <br/>6.
                        Carrying out of fraudulent or dishonest practices which
                        tend to embarrass or disgrace the association. <br/>7. Giving
                        out of official information without the authority of the
                        association. <br/>8. Defrauding the association. <br/>9. Libelous
                        publications and subversive activities. <br/>10. Willful and
                        violent destruction of the association’s properties.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-12">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-12"
                      aria-expanded="false"
                      aria-controls="chapter-12"
                    >
                      ARTICLE 4 -Section One (1) <br />
                      ELECTORAL MATTERS
                    </button>
                  </h2>
                  <div
                    id="chapter-12"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-12"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        a. There shall be an electoral committee which shall be
                        constituted at an annual general congress and shall be
                        responsible for the conduct of election into the
                        executive offices of the association.<br/> b. Duties of the
                        electoral committee shall include the following: <br/>i. The
                        conduct of election into the various executive position
                        of the association which shall be three weeks to the
                        expiration of the tenure of offices of the serving
                        officials.<br/> ii. In line with section One (1) (ai) the
                        tenure of office of any serving executive shall be six
                        weeks to the second semester examination or first
                        semester examination as the case may be. <br/>iii. The
                        provision of an electoral guidelines for the conduct of
                        the election which must be in accordance with the
                        provisions of this constitution and which shall be
                        published one week to the election. <br/>iv. The screening of
                        aspirants for the various executive positions.<br/> v. The
                        conduct and collation of election results. <br/>vi. The
                        production of electoral materials.
                      </p>

                      <p>
                        c. Composition of the electoral committee <br/>i. The members
                        shall include a representative from each of the four
                        departments and other two who shall be appointed from
                        the general congress. <br/>ii. A committee member shall a.
                        Not be an aspirant or a member of the outgoing
                        executive.<br/> b. Be a dully registered member of the
                        association.
                      </p>

                      <p>
                        d. Procedures for the constitution of the electoral
                        committee The constitution of the electoral committee
                        shall be through the following procedures;<br/> i. At the
                        general congress, each department shall elect their
                        representative which shall be by; <br/>a. A nomination of an
                        individual or individuals.<br/> b. A seconder of such
                        nomination.<br/> c. The conduct of the election which be by
                        an open ballot system from which the winner shall emerge
                        by simple majority. <br/>d. At the event of a tie result, a
                        re-election shall be conducted to vote for the
                        contestant. <br/>ii. Two other members shall be elected by
                        the general congress which shall be through; <br/>a. The
                        nomination of at least four individuals from the
                        congress. <br/>b. A seconder of such nominations.<br/> c. The
                        conduct of election which shall be by open ballot and
                        from which the two aspirants with the highest votes
                        shall automatically emerge the winners. <br/>iii. In the
                        constitution of the committee there shall be no voting
                        by proxy and no person shall vote twice.
                      </p>

                      <p>
                        e. Powers of the electoral committee. The electoral
                        committee shall have the following powers; <br/>i. Appoint
                        the chairman and secretary amongst themselves during the
                        committee first meeting.<br/> ii. Draw up electoral rules and
                        regulations which shall be published at least one week
                        to the election date. <br/>iii. Screen every aspirant. <br/>iv.
                        Disqualify the candidature of any aspirant on the ground
                        of electoral malpractice of any kind including the
                        provision of false details.<br/> v. Such disqualification in
                        (iv) must be with substantial evidence and the name of
                        such candidature or aspirant(s) must be published not
                        later than three days to the election. <br/>vi. Verify the
                        C.G.P.A of all aspirants to ensure that they are in
                        accordance with the provision of this constitution. <br/>vii.
                        Produce an aspirant’s interest form which shall be
                        obtained by the aspirant(s) at a cost not more than
                        N7000 for president, N6000 for the vice-president,
                        secretary general, financial secretary and treasurer and
                        N5000 for other positions (screening fee inclusive).<br/>
                        viii. The chairman of the committee shall have powers to
                        declare public the election results and forward same
                        with a comprehensive report to the Dean of the College
                        and the Dean of Student Affairs.<br/> ix. Conduct
                        by-elections into any vacant positions. <br/>x. Display
                        aspirants’ names, other details and codes at least
                        48hours to the election date. <br/>xi. Arrange for the
                        swearing in ceremony of the newly elected officials.<br/>
                        xii. Disqualify any aspirants or elected candidate if
                        found not to have been qualified by the provisions of
                        this constitution and the rules and regulations guiding
                        the conduct of the elections. <br/>xiii. Shall remain but
                        with no financial benefit till the expiration of tenure
                        of office of the elected officials
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-13">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-13"
                      aria-expanded="false"
                      aria-controls="chapter-13"
                    >
                      ARTICLE 4 -Section One (2) <br />
                      GENERAL ELECTORAL RULES AND ELIGIBILITY FOR EXECUTIVE POST
                    </button>
                  </h2>
                  <div
                    id="chapter-13"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-13"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        1. The following general rules shall apply in the
                        conduct of election into all executive positions of the
                        association. <br/>i. All elections shall be by secret ballot
                        only. <br/>ii. Election into all executive positions shall
                        hold three weeks to the expiration of tenure of office
                        of elected executives as stipulated in section (1) (bii)
                        in Article (iv) of the constitution. <br/>iii. Every
                        registered member except members of the electoral
                        committee is eligible to vote. Members of the electoral
                        committee can vote only where there is a tie in which
                        case, they have a deciding vote. <br/>iv. There shall be no
                        voting by proxy and no person shall vote twice for any
                        candidates. <br/>v. During the counting of the ballot papers,
                        all agents of the aspirants whose vote appears on the
                        ballot paper shall be present. <br/>vi. No 200-level student
                        and above shall be allowed to vote without the
                        presentation of an identity card which must reflect
                        his/her department. <br/>vii. 100-level students shall only
                        be allowed to vote on the presentation of their
                        admission letter. <br/>viii. Only the comprehensive list of
                        the students from the various department and those who
                        have completed their annual financial obligations with
                        the association shall be used for the election. <br/>ix. A
                        by-election shall be held to fill any vacant office
                        within two (2) weeks of such vacation of such an office.<br/>
                        x. A candidate may withdraw from an election by
                        submitting a letter to the electoral committee informing
                        them of such decision within 48hours to the polling day.
                      </p>

                      <p>
                        2. Criteria for voting a. School ID card for 200-level
                        and above and an original admission letter for
                        100-level. <br/>b. NUESA receipt (from the about to end
                        administration)
                      </p>

                      <p>
                        3. Eligibility for executive post <br/>i. Only year three
                        students shall be allowed to contest for a post of the
                        president and the secretary general.<br/> ii. A candidate
                        contesting for the post of the president must have a
                        minimum academic achievement of C.G.P.A of 3.00 and a
                        C.G.P.A of 2.50 for others <br/>iii. All other executive
                        positions shall be open to all members of the
                        association apart from (i) above. <br/>iv. A candidate for
                        any electoral post; <br/>a. Must not belong to any secret
                        society. <br/>b. Must be upright and must not have been
                        involved in any scandal. <br/>c. Must be a person with a good
                        and great vision for the association. <br/>d. Must be an
                        up-to-date financial member of the association.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-14">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-14"
                      aria-expanded="false"
                      aria-controls="chapter-14"
                    >
                      ARTICLE 5 <br /> STUDENTS’ ADVISORY PANEL
                    </button>
                  </h2>
                  <div
                    id="chapter-14"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-14"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        i. There shall be students’ advisory panel <br/> ii. The panel
                        shall consist of five members with a representative from
                        each department and the college president as the
                        chairman of the panel. <br/>iii. There shall be a secretary
                        of the panel who shall be appointed amongst the other
                        four members.<br/> iv. The presidents or each department
                        shall each produce at his discretion their
                        representative. <br/>v. The panel shall meet at most three
                        times in a session. <br/>vi. The panel shall not be entitled
                        to any financial benefit but refreshment at each
                        meeting. <br/>vii. The tenure of office of the panel’s
                        representative from the department shall be for a
                        session. <br/>viii. The functions of the panel shall be; <br/>a.
                        To monitor the EXCO’S budget which must be submitted to
                        it, two weeks after assumption of office. <br/>b. To monitor
                        the projects quoted in the exco’s budget to ensure its
                        full execution. <br/>c. To sanction any inefficient or
                        ineffective member of the EXCO.<br/>  d. Appraise the
                        activities of the exco from time to time to ensure an
                        effective, efficient and competent EXCO <br/>e. To
                        investigate any allegation of fraud and financial
                        impropriety levelled against any EXCO or other members
                        of the committee set up by the EXCO for any purpose and
                        take action accordingly. <br/>f. To receive and investigate
                        any petition levelled against any EXCO member and take
                        appropriate actions as may be deemed fit. <br/>g. Make
                        necessary recommendations to the Dean of the College and
                        the EXCO on ways sustaining the aims and objectives of
                        the association.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-15">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-15"
                      aria-expanded="false"
                      aria-controls="chapter-15"
                    >
                      ARTICLE 6 - Section One (1) <br /> FUNDING SOURCES
                    </button>
                  </h2>
                  <div
                    id="chapter-15"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-15"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        The association shall derive its revenue from the
                        following sources; <br/>1. Annual membership dues <br/>2. Aids and
                        grants from co-operate organisations or individuals
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-16">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-16"
                      aria-expanded="false"
                      aria-controls="chapter-16"
                    >
                      ARTICLE 6 - Section Two (2) <br /> BANK ACCOUNT
                    </button>
                  </h2>
                  <div
                    id="chapter-16"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-16"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        1. The association shall have a bank account. <br/>2. There
                        shall be three signatories to the association’s account<br/>
                        3. These are the president, financial secretary and
                        treasurer. <br/>4. No money shall be withdrawn without the
                        signature of the president, the financial secretary and
                        the treasurer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-17">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-17"
                      aria-expanded="false"
                      aria-controls="chapter-17"
                    >
                      ARTICLE 7 <br /> DEFINITION
                    </button>
                  </h2>
                  <div
                    id="chapter-17"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-17"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        1. EXCO - executive committee of the association <br/>2.
                        Her/His - refers to both sexes <br/> 3. Officials - any
                        member(s) of the association elected or appointed to
                        serve the association in any capacity or capacities.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-18">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-18"
                      aria-expanded="false"
                      aria-controls="chapter-18"
                    >
                      ARTICLE 8
                      <br />
                      AMENDMENTS OF THE CONSTITUTION
                    </button>
                  </h2>
                  <div
                    id="chapter-18"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-18"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        i. This constitution shall be subject to amendment or
                        revision upon a seconded motion to the effect and passed
                        by not less than two-third (2/3) of all members of
                        congress present and by voting. <br/>ii. Any proposed
                        amendment motion must be handed to the secretary general
                        of the association <br/>iii. Amendment shall be in form of;<br/>
                        a. To leave out words <br/>b. To leave out words and add
                        others <br/>c. To add other words.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-19">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-19"
                      aria-expanded="false"
                      aria-controls="chapter-19"
                    >
                      OATH OF OFFICE
                    </button>
                  </h2>
                  <div
                    id="chapter-19"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-19"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        I……………………………………………………………………………………. Do solemnly swear
                        that as the……………… ………………I will discharge my duties
                        faithfully, transparently and to the best of my
                        knowledge and ability, and in accordance with the
                        provisions of the NUESA JOSTUM constitution and always
                        in the interest of solidarity, welfare, well being and
                        prosperity of the association and her members; and that
                        I will preserve, protect, defend and promote the NUESA
                        JOSTUM constitution; and that I will not allow my
                        personal interest influence my official conduct
                        throughout my tenure in office, so help me God. This is
                        made on this Day …... of ……………………… 20……
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-20">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-20"
                      aria-expanded="false"
                      aria-controls="chapter-20"
                    >
                      CONSTITUTION AMMENDMENT COMMITTEE
                    </button>
                  </h2>
                  <div
                    id="chapter-20"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-20"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        The honourable members of the constitution amendment
                        committee are; <br/>1. Rt. Sen. Iortan James Terhide -
                        Chairman <br/>2. Rt. Sen. Gbande Hossana Saanmoyol -
                        Secretary <br/>3. Rt. Comr. Atoo Sylvester Terungwa - Member<br/>
                        4. Rt Sen. Terkaa Maxwell - Member <br/>5. Dist. Sen. Chekwa
                        Emmanuel - Member<br/>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Constitution;
