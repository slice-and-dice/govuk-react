import React from 'react';
import PropTypes from 'prop-types';
import { BLACK, WHITE } from 'govuk-colours';

import TopNavWrapper from './atoms/top-nav-wrapper';
import TopNavInner from './atoms/top-nav-inner';
import BottomNavWrapper from './atoms/bottom-nav-wrapper';
import Company from './atoms/company';
import LogoSearchWrapper from './atoms/logo-search-wrapper';
import RightHandSide from './atoms/right-hand-side';
import SearchWrapper from './atoms/search-wrapper';
import UnorderedList from './atoms/unordered-list';
import ListItem from './atoms/list-item';
import MenuButton from './atoms/menu-button/';

import IconTitle from './atoms/icon-title';

/**
 *
 * ### Usage
 *
 * TopNav with logo, service title and navigation items
 * ```jsx
 * import CrownIcon from '@govuk-react/icon-crown';
 * import SearchBox from '@govuk-react/search-box';
 * import Header from '@govuk-react/header';
 * import TopNav, { asNavLinkAnchor, asTopNavAnchor } from '@govuk-react/top-nav';
 *
 * const LogoAnchor = asTopNavAnchor('a');
 * const NavAnchor = asNavLinkAnchor('a');
 *
 * const link = 'https://example.com?=1';
 *
 * const Company = (
 *   <LogoAnchor href={link} target="new">
 *     <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
 *   </LogoAnchor>
 * );
 *
 * const ServiceTitle = (
 *   <NavAnchor href={link} target="new">
 *     <Header mb="0" level={3}>Service Title</Header>
 *   </NavAnchor>
 * );
 *
 * const Search = (
 *   <SearchBox placeholder="Search">hi</SearchBox>
 * );
 *
 * <TopNav company={Company} serviceTitle={ServiceTitle} search={Search} active={0}>
 *   <NavAnchor href="https://example.com?q=catdog" target="new">Navigation item #1</NavAnchor>
 *   <NavAnchor href="https://example.com?q=dogcat" target="new">Navigation item #2</NavAnchor>
 * </TopNav>
 * ```
 *
 * ```jsx
 * import { BrowserRouter, Link } from 'react-router-dom';
 * import CrownIcon from '@govuk-react/icon-crown';
 * import Header from '@govuk-react/header';
 * import TopNav, { asLogoAnchor, asNavLinkAnchor } from '@govuk-react/top-nav';
 *
 * const LogoLink = asTopNavAnchor(Link);
 * const NavLink= asNavLinkAnchor(Link);
 *
 * const reactRouterLink = '/section';
 * const CompanyLink = (
 *   <LogoLink to={reactRouterLink}>
 *     <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
 *   </LogoLink>
 * );
 *
 * const ServiceTitleLink = (
 *   <NavLink to={reactRouterLink}>
 *     <Header mb="0" level={3}>Service Title</Header>
 *   </NavLink>
 * );
 *
 * <BrowserRouter>
 *   <TopNav company={CompanyLink} serviceTitle={ServiceTitleLink} />
 * </BrowserRouter>
 * ```
 *
 * ### References:
 * - http://alphagov.github.io/govuk_template/example-proposition-menu.html
 *
 * ### TODO:
 * - TODO: this component is a work in progress and needs to more closely match existing examples
 * - TODO: is TopNav the right name? What's it called in other GDS styles/patterns?
 * - TODO: (The name Header is ambiguous)
 * - TODO: Fix the position and design of this button
 * - TODO: #205 Use context api and/or render props for `active` navigation items
 * - TODO: Vertical alignment here needs some work, perhaps should be its own component
 * - TODO: Icon should be lined up with font baseline, e.g. vertical-align: baseline
 */
const TopNav = ({
  bgColor,
  color,
  company,
  serviceTitle,
  search,
  children,
  ...props
}) => (
  <React.Fragment>
    <TopNavWrapper bgColor={bgColor} color={color} {...props}>
      <TopNavInner>
        <LogoSearchWrapper>
          <Company>
            {company}
          </Company>
          {search &&
            <SearchWrapper>
              {search}
            </SearchWrapper>
          }
        </LogoSearchWrapper>
        <RightHandSide>
          {serviceTitle}
          {children &&
          <React.Fragment>
            {/* TODO fix the position and design of this button */}
            <MenuButton />
            <UnorderedList serviceTitle={serviceTitle}>
              {/* TODO #205 use context api and/or render props here for `active` */}
              {children.length && children.map ? (
                children.map((child, i) => (
                  child && (child.length || child.props)
                    ? <ListItem key={child.key || i}>{child}</ListItem>
                    : null
                ))
              ) : (
                <ListItem>{children}</ListItem>
              )}
            </UnorderedList>
          </React.Fragment>
          }
        </RightHandSide>
      </TopNavInner>
    </TopNavWrapper>
    <BottomNavWrapper />
  </React.Fragment>
);

TopNav.defaultProps = {
  bgColor: BLACK,
  color: WHITE,
  company: undefined,
  serviceTitle: undefined,
  search: false,
  children: undefined,
};

TopNav.propTypes = {
  /** Top nav background color */
  bgColor: PropTypes.string,
  /** Top nav text color */
  color: PropTypes.string,
  /** Company component e.g. GOV UK */
  company: PropTypes.node,
  /** Service title component e.g. Food Standards Authority */
  serviceTitle: PropTypes.node,
  /** Search component */
  search: PropTypes.node,
  /** List Navigation items with anchor tags e.g. NavAnchor components */
  children: PropTypes.node,
};

TopNav.IconTitle = IconTitle;

export default TopNav;

export asTopNavAnchor from './hoc/asTopNavAnchor';
export asNavLinkAnchor from './hoc/asNavLinkAnchor';
