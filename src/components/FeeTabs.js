import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export default class FeeTabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="fee-tabs-container">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Hourly Rate
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Flat Fee
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Flat Fee Plus Contingency
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Costs
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row className="mt-3">
              <Col sm="12">
                <h4>Hourly Rate</h4>
                <p>
                  Hourly rate clients are currently charged $385.00 per hour. Hours are recorded in tenths and the client is billed every 30-60 days, and the bills are due upon receipt. The client is required to post a retainer fee at the time of the retention and signing of the retainer agreement.  The amount of the retention fee is dependent on the amount of work the matter appears to require.  It will generally vary from $3000.00 to $15,000.00, with most cases retained with a payment of $5000.00.  The retainer fee is ONLY APPLIED to the payment of the final bill issued at the conclusion of the matter, or at the conclusion of the attorney client relationship.  If, at that time, the final bill is less that the retainer amount, the client will receive a check for the difference along with the final bill.   If the final bill is more than the retainer amount, then the Client will receive a credit against the final bill for the retainer amount.
                </p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row className="mt-3">
              <Col sm="12">
                <h4>Flat Fee</h4>
                <p>
                    After discussing the nature of the case Clients can be quoted various flat fee options.  Flat fees are fully earned when paid and are paid in full at the start of the retention.  They can be defined in various ways depending on the case, but they all have one thing in common…the flat fee pays for all work performed by the attorney during the flat fee period.   In some cases it is appropriate to define flat fee periods in terms of time.  For example, a flat fee at retention may pay for all work performed for six months or ten months or fourteen months from the date of retention.  Flat fees may also be defined by events. For example, a flat fee may pay for all work performed by the attorney until one month after the court assigns the matter a trial date. Any event which is known will occur during the course of the case may be used to define the end of the flat fee period.   Usually, the retention agreement will indicate that one month prior to the expiration of the flat fee period a new flat fee shall be negotiated for another defined period;  or the Client will then be required to post a retention fee and be moved to an hourly rate.  The Client decides which way to go based on the status of the case.  For example, if the matter appears to be very close to settlement, it will probably better to move to an hourly rate rather than buy a large chunk of time.  However, if it appears the matter will take much longer to resolve, a flat fee is better.   
                </p>
                <p>
                    Regardless of how the Client elects to pay, the work will be the same, and the Client will be provided with a record of the Attorney's work, recorded in tenths of an hour, every 30-60 days.  A Client that elected to pay a flat rate, AND THEN USES THE ATTORNEY'S SERVICES THROUGHOUT  THE FLAT RATE PERIOD will, in the vast majority of cases, save money over what the Client would have paid on an hourly rate arrangement.  The saving usually equals anywhere from 25% to 50%.
                </p>
                <p>
                    The decision to go flat rate or hourly rate is the Client's, who is in a particularly better position to make that decision at the start of the retention.  If the Client believes their opponent is the type that will fight to the bitter end, then the flat rate is the way to go.   If the Client believes the opponent will quit the fight, or if the Client is willing to accept a settlement amount that is far less than what the Client believes the case is worth, then an hourly rate is probably the better choice.  Tax ramifications and the Client's pre-existing business models may also influence the choice.  However, regardless of the method of payment chosen, the work performed will be the same.
                </p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row className="mt-3">
              <Col sm="12">
                <h4>Flat Fee Plus Contingency</h4>
                <p>
                    Litigation is expensive, and can be very challenging economically.  Inability to achieve just compensation because of a lack of the funds necessary to fight for justice is a recurring problem in our society.  In some instances, matters will be taken with a reduced flat fee agreement,  and a contingency fee to be paid upon settlement or recovery of judgment.
                    <br/>No case, regardless of merit, is ever taken on a pure contingency.
                </p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row className="mt-3">
              <Col sm="12">
                <h4>Costs</h4>
                <p>
                    Costs are expenses and fees paid to third parties other than the Attorney for work performed on the case that is not legal work of the type that Attorney's perform.  Costs would include items like: fees paid to the court; fees paid to process servers; fees paid to court reporters; fees paid for expert testimony; jury fees; postage fees; messenger fees; parking fees; fees for materials used in the presentation of the case like binders; divider tabs; photocopying charges; fees for travel out of state to conduct depositions; videographer fees; interpreter fees, and so on.
                </p>
                <p>
                    All costs are paid by the Client.  At the initiation of the retention, the Client will be required to post money for costs (usually between $1500 and $2500).  Cost money is held in the Attorney Client Trust Account by the Attorney and is used by the Attorney only for the payment of costs.  Attorney will not expend costs on a single item of more than $500.00 without the written consent of Client.   If the Attorney spends his own money to pay costs, then he will bill the Client, and all bills are due upon receipt.  
                </p>
                <p>
                    Generally, the initial cost deposit of the Client will carry the cost needs of litigation through the first year.  The lion's share of cost expense in any case is usually incurred close to trial and in trial. 
                </p>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
